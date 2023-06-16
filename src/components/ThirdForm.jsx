import React from 'react'

export default function ThirdForm({ pageCount, formik, erroredClick }) {
    return (
        <section className='thirdPage page' style={{ display: pageCount === 3 ? "block" : "none" }}>
            <div className="header">What's your project budget?</div>
            <div className="description">Please select the project budget range you have in mind.</div>
            <div className="flexContainer">
                <div className="thirdError">{erroredClick >= 1 && formik.touched.budget && formik.errors.budget && formik.errors.budget}</div>
                <div className="flexElement">
                    <input
                        type="radio"
                        name="budget"
                        id="5000-10000"
                        value="5000-10000"
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="5000-10000">
                        <div className="radioIcon">
                            <div className="blueBg">
                                <div className="whiteDot"></div>
                            </div>
                        </div>
                        <span>$5.000 - $10.000</span>
                    </label>
                </div>
                <div className="flexElement">
                    <input
                        type="radio"
                        name="budget"
                        id="10000-20000"
                        value="10000-20000"
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="10000-20000">
                        <div className="radioIcon">
                            <div className="blueBg">
                                <div className="whiteDot"></div>
                            </div>
                        </div>
                        <span>$10.000 - $20.000</span>
                    </label>
                </div>
                <div className="flexElement">
                    <input
                        type="radio"
                        name="budget"
                        id="20000-50000"
                        value="20000-50000"
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="20000-50000">
                        <div className="radioIcon">
                            <div className="blueBg">
                                <div className="whiteDot"></div>
                            </div>
                        </div>
                        <span>$20.000 - $50.000</span>
                    </label>
                </div>
                <div className="flexElement">
                    <input
                        type="radio"
                        name="budget"
                        id="50000"
                        value="50000+"
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="50000">
                        <div className="radioIcon">
                            <div className="blueBg">
                                <div className="whiteDot"></div>
                            </div>
                        </div>
                        <span>$50.000 +</span>
                    </label>
                </div>
            </div>
        </section>
    )
}
