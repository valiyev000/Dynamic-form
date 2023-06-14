import { useState } from 'react'
import './App.scss'
import FirstForm from './components/FirstForm'
import FourthForm from './components/FourthForm'
import SecondForm from './components/SecondForm'
import ThirdForm from './components/ThirdForm'

function App() {

  const [pageCount, setPageCount] = useState(1)

  console.log(pageCount);
  return (
    <main>
      <div className="header">Get a project quote</div>
      <div className="description">Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</div>
      <div className="window">
        <div className="progressBar">
          <div className="pageCounter" style={{background:(pageCount>0) ? "#4A3AFF" : "#EFF0F6",color:(pageCount>0) ? "#FFFFFF" : "#6F6C90"}}>1</div>
          <div className="range">
            <div className="rangeInner" style={{width:(pageCount>1 ? "100%" :(pageCount===1)? "50%" : "0%")}}></div>
          </div>
          <div className="pageCounter" style={{background:(pageCount>1) ? "#4A3AFF" : "#EFF0F6",color:(pageCount>1) ? "#FFFFFF" : "#6F6C90"}}>2</div>
          <div className="range">
            <div className="rangeInner" style={{width:(pageCount>2 ? "100%" :(pageCount===2)? "50%" : "0%")}}></div>
          </div>
          <div className="pageCounter" style={{background:(pageCount>2) ? "#4A3AFF" : "#EFF0F6",color:(pageCount>2) ? "#FFFFFF" : "#6F6C90"}}>3</div>
          <div className="range">
            <div className="rangeInner" style={{width:(pageCount>3 ? "100%" :(pageCount===3)? "50%" : "0%")}}></div>
          </div>
          <div className="pageCounter" style={{background:(pageCount>3) ? "#4A3AFF" : "#EFF0F6",color:(pageCount>3) ? "#FFFFFF" : "#6F6C90"}}>4</div>
        </div>
        <div className="dynamicWindow">
          <FirstForm pageCount={pageCount} />
          <SecondForm pageCount={pageCount} />
          <ThirdForm pageCount={pageCount} />
          <FourthForm pageCount={pageCount} />
        </div>
      </div>
      <button onClick={()=>setPageCount((prev)=>prev+1)}>Next Step</button>
    </main>
  )
}

export default App