import React from 'react'

export default function FourthForm({ pageCount }) {
    return (
        <section className='fourthForm form' style={{display:pageCount === 4 ? "block" : "none"}}>
            fourthForm
        </section>
    )
}
