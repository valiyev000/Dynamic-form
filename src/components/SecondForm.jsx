import React from 'react'

export default function SecondForm({ pageCount }) {
    return (
        <section className='secondForm form' style={{display:pageCount === 2 ? "block" : "none"}}>
            SecondForm
        </section>
    )
}
