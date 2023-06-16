import React from 'react'
import developmentIcon from '../images/developmentIcon.svg'
import marketingIcon from '../images/marketingIcon.svg'
import otherIcon from '../images/otherIcon.svg'
import webDesignIcon from '../images/webDesignIcon.svg'

export default function SecondForm({ pageCount, formik, setPageCount  }) {
    // console.log("SecondForm render");
    return (
        <section className='secondPage page' style={{display:pageCount === 2 ? "block" : "none"}}>
            <div className="header">Our services</div>
            <div className="description">Please select which service you are interested in.</div>
            <div className="flexContainer">
                <div className="flexElement">
                    <input
                    type="checkbox"
                    name="services"
                    id="development"
                    value="development"
                    onChange={formik.handleChange}
                    />
                    <label htmlFor="development">
                        <div className="iconDiv">
                            <img src={developmentIcon} alt="developmentIcon" />
                        </div>
                        <span>Development</span>
                    </label>
                </div>
                <div className="flexElement">
                    <input
                    type="checkbox"
                    name="services"
                    id="webDesign"
                    value="webDesign"
                    onChange={formik.handleChange}
                    />
                    <label htmlFor="webDesign">
                        <div className="iconDiv">
                            <img src={webDesignIcon} alt="webDesignIcon" />
                        </div>
                        <span>Web Design</span>
                    </label>
                </div>
                <div className="flexElement">
                    <input
                    type="checkbox"
                    name="services"
                    id="marketing"
                    value="marketing"
                    onChange={formik.handleChange}
                    />
                    <label htmlFor="marketing">
                        <div className="iconDiv">
                            <img src={marketingIcon} alt="marketingIcon" />
                        </div>
                        <span>Marketing</span>
                    </label>
                </div>
                <div className="flexElement">
                    <input
                    type="checkbox"
                    name="services"
                    id="other"
                    value="other"
                    onChange={formik.handleChange}
                    />
                    <label htmlFor="other">
                        <div className="iconDiv">
                            <img src={otherIcon} alt="otherIcon" />
                        </div>
                        <span>Other</span>
                    </label>
                    <div className="sample">{pageCount}</div>
                </div>
            </div>
        </section>
    )
}
