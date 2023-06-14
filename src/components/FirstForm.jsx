import React from 'react'
import nameIcon from '../images/nameIcon.svg'
import emailIcon from '../images/emailIcon.svg'
import phoneIcon from '../images/phoneIcon.svg'
import companyIcon from '../images/companyIcon.svg'

export default function FirstForm({ pageCount }) {
    return (
        <section className='firstForm form' style={{ display: pageCount === 1 ? "block" : "none" }}>
            <div className="header">Contact details</div>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisc.</div>
            <form action="#" method="post">
                <div className="formElement">
                    <label htmlFor="name">Name</label>
                    <div className="inputDiv">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder='John Carter'
                        />
                        <div className="imgDiv">
                            <img src={nameIcon} alt="nameIcon.svg" />
                        </div>
                    </div>
                </div>
                <div className="formElement">
                    <label htmlFor="email">Email</label>
                    <div className="inputDiv">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder='Email address'
                        />
                        <div className="imgDiv">
                            <img src={emailIcon} alt="emailIcon.svg" />
                        </div>
                    </div>
                </div>
                <div className="formElement">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="inputDiv">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder='(123)4567890'
                        />
                        <div className="imgDiv">
                            <img src={phoneIcon} alt="phoneIcon.svg" />
                        </div>

                    </div>
                </div>
                <div className="formElement">
                    <label htmlFor="company">Company</label>
                    <div className="inputDiv">
                        <input
                            type="text"
                            name="company"
                            id="company"
                            placeholder='Company name'
                        />
                        <div className="imgDiv">
                            <img src={companyIcon} alt="companyIcon.svg" />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}