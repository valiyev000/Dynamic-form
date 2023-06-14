import React from 'react'

export default function ThirdForm({ pageCount }) {
    return (
        <section className='thirdForm form' style={{display:pageCount === 3 ? "block" : "none"}}>
            ThirdForm
        </section>
    )
}
