import React, { useRef } from 'react'
import nameIcon from '../images/nameIcon.svg'
import emailIcon from '../images/emailIcon.svg'
import phoneIcon from '../images/phoneIcon.svg'
import companyIcon from '../images/companyIcon.svg'

export default function FirstForm({ pageCount, formik}) {

    console.log("FirstForm render");

    return (// pageCount 1dirse bu component'in displayi block eks halda none olacaq. 4 component'in 4ude bu formada yazilib
        <section className='firstPage page' style={{ display: pageCount === 1 ? "block" : "none" }}>
            <div className="header">Contact details</div>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisc.</div>
            <div className="flexContainer">
                <div className="flexElement">
                    <label htmlFor="name">Name</label>
                    <div className="inputDiv">
                        <input
                            type="text"
                            name="name" //name'ler formikdeki initialValues'deki key'lerle uzlasmalidirlar
                            id="name"
                            placeholder='John Carter'
                            value={formik.values.name} // standart formik syntax'i
                            onChange={formik.handleChange}  // standart formik syntax'i
                            onBlur={formik.handleBlur}  // standart formik syntax'i
                        />
                        <div className="imgDiv">
                            <img src={nameIcon} alt="nameIcon.svg" />
                        </div>
                        <small className="errorMessage">{formik.touched.name && formik.errors.name && formik.errors.name}</small>
                        {/* eger error olarsa small tag'inin icinde gorsenecek */}
                    </div>
                </div>
                <div className="flexElement">
                    <label htmlFor="email">Email</label>
                    <div className="inputDiv">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder='Email address'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="imgDiv">
                            <img src={emailIcon} alt="emailIcon.svg" />
                        </div>
                        <small className="errorMessage">{formik.touched.email && formik.errors.email && formik.errors.email}</small>
                    </div>
                </div>
                <div className="flexElement">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="inputDiv">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder='(123)4567890'
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="imgDiv">
                            <img src={phoneIcon} alt="phoneIcon.svg" />
                        </div>
                        <small className="errorMessage">{formik.touched.phone && formik.errors.phone && formik.errors.phone}</small>
                    </div>
                </div>
                <div className="flexElement">
                    <label htmlFor="company">Company</label>
                    <div className="inputDiv">
                        <input
                            type="text"
                            name="company"
                            id="company"
                            placeholder='Company name'
                            value={formik.values.company}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="imgDiv">
                            <img src={companyIcon} alt="companyIcon.svg" />
                        </div>
                        <small className="errorMessage">{formik.touched.company && formik.errors.company && formik.errors.company}</small>
                    </div>
                </div>
            </div>
        </section>
    )
}