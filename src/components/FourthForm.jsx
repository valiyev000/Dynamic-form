import React from 'react'
import submitBg from '../images/submitBg.svg'

export default function FourthForm({ pageCount }) {
    return (
        <section className='fourthPage page' style={{display:pageCount === 4 ? "flex" : "none"}}>
            <img src={submitBg} alt="submitBg.svg" />
            <div className="header">Submit your quote request</div>
            <div className="description">Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</div>
        </section>
    )
}
