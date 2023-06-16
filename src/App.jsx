import { useEffect, useState } from 'react'
import './App.scss'
import FirstForm from './components/FirstForm'
import SecondForm from './components/SecondForm'
import FourthForm from './components/FourthForm'
import ThirdForm from './components/ThirdForm'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ThanksModal from './components/ThanksModal'



function App() {

  const [pageCount, setPageCount] = useState(1) //formun hansi hissesinde oldugumuzu teyin edir. PageCount'un deyisimine uygun olaraq componentlerden yalniz biri acig qalir

  const formValidation = Yup.object().shape( //YUP syntax'ina uygun yigilmis validation
    {
      name: Yup.string("*Only text").required("*Required").min(5, "*Min 5 letter required"),
      email: Yup.string("*Only text").required("*Required").email("*Not an email"),
      phone: Yup.string("*Not a number").required("*Required").min(10, "*Min 10").max(10, "Max 10"),
      company: Yup.string("*Only text").required("*Required"),
      services: Yup.array().min(1, '*You must select at least one.'),
      budget: Yup.string().required('*Please select an option.')
    }
  )

  const formik = useFormik( //useFormikin syntax'ina uygun yigilmis inputlarin toplandigi section
    {
      initialValues: {
        name: '',
        email: '',
        phone: '',
        company: '',
        services: [],
        budget: ''
      },
      validateOnMount: true, //page acilan kimi validation'u yoxlayir
      onSubmit: (e) => {
        modalStatus && console.log(e) //eger ekranda Thanksmodal gorsenibse demeli user formu bitirmisdir. Ve netice console'a yazilmisdir. 
      },                             // Cunki modal acilibsa modalStatus true qaytaracag ve netice console da gorsenecek
      validationSchema: formValidation //YUP'dan gelen validation'u import edirik
    }
  )

  console.log(pageCount, "App render");

  const [erroredClick, setErroredClick] = useState(0) //hansi componentde olursan ol, hemin component'de "Next Step" button'nunun nece defe validation duzgun olmadan click olundugunu gosterir

  useEffect(() => { //yeni sehifeye kecid edilende errorCLicked 0'lanir
    setErroredClick(0)
  }, [pageCount])

  const [modalStatus, setModalStatus] = useState(false) //ThanksModal komponentinin aciq olub olmadigini gosterir

  useEffect(()=>{ //modalStatus deyisdikde ise dusur ve modalStatus true verdikde body'de scroll'u engelleyir
    if (modalStatus) {
      document.body.classList.add("overflowPrevent")
    } else {
      document.body.classList.remove("overflowPrevent")
    }
  },[modalStatus])

  const [scrollPos, setScrollPos] = useState(window.scrollY) //modalin acilmasi ucun lazim olan top: "xxx"px deyerini assign edir

  return (
    <main>
      <div className="header">Get a project quote</div>
      <div className="description">Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</div>
      <div className="window">
        <div className="progressBar">
          <div className="pageCounter" style={{ background: (pageCount > 0) ? "#4A3AFF" : "#EFF0F6", color: (pageCount > 0) ? "#FFFFFF" : "#6F6C90" }}>1</div>
          <div className="range">
            <div className="rangeInner" style={{ width: (pageCount > 1 ? "100%" : (pageCount === 1) ? "50%" : "0%") }}></div>
          </div>
          <div className="pageCounter" style={{ background: (pageCount > 1) ? "#4A3AFF" : "#EFF0F6", color: (pageCount > 1) ? "#FFFFFF" : "#6F6C90" }}>2</div>
          <div className="range">
            <div className="rangeInner" style={{ width: (pageCount > 2 ? "100%" : (pageCount === 2) ? "50%" : "0%") }}></div>
          </div>
          <div className="pageCounter" style={{ background: (pageCount > 2) ? "#4A3AFF" : "#EFF0F6", color: (pageCount > 2) ? "#FFFFFF" : "#6F6C90" }}>3</div>
          <div className="range">
            <div className="rangeInner" style={{ width: (pageCount > 3 ? "100%" : (pageCount === 3) ? "50%" : "0%") }}></div>
          </div>
          <div className="pageCounter" style={{ background: (pageCount > 3) ? "#4A3AFF" : "#EFF0F6", color: (pageCount > 3) ? "#FFFFFF" : "#6F6C90" }}>4</div>
        </div>
        <form action="#" onSubmit={formik.handleSubmit} className='dynamicWindow'>
          <FirstForm pageCount={pageCount} formik={formik} setPageCount={setPageCount} />
          <SecondForm pageCount={pageCount} formik={formik} setPageCount={setPageCount} erroredClick={erroredClick} />
          <ThirdForm pageCount={pageCount} formik={formik} setPageCount={setPageCount} erroredClick={erroredClick} />
          <FourthForm pageCount={pageCount} formik={formik} setPageCount={setPageCount} />
          <button
            className='prevBtn'
            style={{ visibility: (pageCount === 1 ? "hidden" : "visible") }}
            onClick={() => setPageCount((prev) => prev - 1)}
          >Previous Step</button>
          <button
            onClick={
              (pageCount === 1 && !(formik.errors.name || formik.errors.email || formik.errors.phone || formik.errors.company)) ? () => { setPageCount(2)}//1ci sehifedeki validation'lar duzgundurse pageCount 2 olur ve avtomatik 2ci component acilir
                : (pageCount === 2 && formik.values.services.length !== 0) ? () => { setPageCount(3)} //2ci sehifedeki checkboxlardan azi 1i doludursa PageCount 3 olur
                  : (pageCount === 3 && !formik.errors.budget) ? () => { setPageCount(4)}// eger budget'den 1i secilibse error yoxdur demekdir ve pageCount 4 olur. yeni sonuncu sehife acilir
                  : pageCount === 4 ? ()=> {setModalStatus((prev)=>!prev); setScrollPos(window.scrollY)} //sonuncu sehifede next step yazisi Submit yazisina cevrilir. Click olunduqda modal'in statusunu true edir. belelikle modal ekranda gorsenir. Duzgun yerde acilmasi ucunde window.scrollY deyerini assign edir
                    : () => setErroredClick((prev) => prev + 1) // yuxari scope'larin hecbiri dogru olmasa yalniz errorClick'in deyeri artir
            }
            style={{ bottom: (pageCount === 4 ? "30px" : "-112px"), right: (pageCount === 4 ? "170px" : "-45px") }} // dorduncu component'de button'nun yeri deyisir
          >
            {pageCount === 4 ? "Submit" : "Next Step"}
            {/* 4cu komponentde buttonun yazisi deyisir */}
          </button>
        </form>
      </div>
      {modalStatus && <ThanksModal scrollPos={scrollPos} />}{/* modalStatus true'dursa ThanksModal ekranda gorsenir */}
    </main>
  )
}

export default App