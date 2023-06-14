import React from 'react'

export default function FirstForm({ pageCount }) {
    return (
        <section className='firstForm form' style={{display:pageCount === 1 ? "block" : "none"}}>
            <div className="header">Contact details</div>
        </section>
    )
}