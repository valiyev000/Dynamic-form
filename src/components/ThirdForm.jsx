import React from 'react'

export default function ThirdForm({ pageCount }) {
    return (
        <section className='thirdPage page' style={{display:pageCount === 3 ? "block" : "none"}}>
            ThirdForm
        </section>
    )
}
