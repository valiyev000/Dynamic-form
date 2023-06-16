import React from 'react'

export default function FourthForm({ pageCount }) {
    return (
        <section className='fourthPage page' style={{display:pageCount === 4 ? "block" : "none"}}>
            fourthForm
        </section>
    )
}
