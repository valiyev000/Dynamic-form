import React from 'react'

export default function ThirdForm({ pageCount }) {
    return (
        <section className='thirdPage page' style={{ display: pageCount === 3 ? "block" : "none" }}>
            <div className="header">What's your project budget?</div>
            <div className="description">Please select the project budget range you have in mind.</div>
            <div className="flexContainer">
                <div className="flexElement">
                    <input type="radio" name="budget" id="5000-10000" value="5000-10000" />
                    <label htmlFor="5000-10000">5000-10000</label>
                </div>
            </div>
        </section>
    )
}
