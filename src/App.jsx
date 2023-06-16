import { useState } from 'react'
import './App.scss'
import FirstForm from './components/FirstForm'
import SecondForm from './components/SecondForm'
import FourthForm from './components/FourthForm'
import ThirdForm from './components/ThirdForm'
import { useFormik } from 'formik'
import * as Yup from 'yup'



function App() {

  const [pageCount, setPageCount] = useState(1)

  const formValidation = Yup.object().shape(
    {
      name: Yup.string("*Only text").required("*Required").min(5, "*Min 5 letter required"),
      email: Yup.string("*Only text").required("*Required").email("*Not an email"),
      phone: Yup.string("*Not a number").required("*Required").min(10, "*Min 10").max(10, "Max 10"),
      company: Yup.string("*Only text").required("*Required"),
      services: Yup.boolean().oneOf([true], "You must accept one of these")
      
    }
  )

  const formik = useFormik(
    {
      initialValues: {
        name: '',
        email: '',
        phone: '',
        company: '',
        services: ''
      },
      validateOnMount: true,
      onSubmit: (e) => {
        console.log(e)
      },
      validationSchema: formValidation
    }
  )



  console.log(pageCount, "App render");
  
  


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
          <SecondForm pageCount={pageCount} formik={formik} setPageCount={setPageCount} />
          <ThirdForm pageCount={pageCount} formik={formik} setPageCount={setPageCount} />
          <FourthForm pageCount={pageCount} formik={formik} setPageCount={setPageCount} />
        </form>
      </div>
    </main>
  )
}

export default App