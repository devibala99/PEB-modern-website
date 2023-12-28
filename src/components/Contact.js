import React, { useState } from 'react'
import video from "../images/contact.mp4"
import Header from './Header'
import "../stylesheets/contact.css"
import HomeContact from './HomeContact'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientMobile, setClientMobile] = useState("");
    const [clientCompany, setClientCompany] = useState("");
    const [clientCity, setClientCity] = useState("");
    const [clientMessage, setClientMessgee] = useState("");

    const [queryDetails, setQueryDetails] = useState([]);
    const handleSubmit = () => {
        setQueryDetails([...queryDetails, {
            name: clientName,
            email: clientEmail,
            mobile: clientMobile,
            company: clientCompany,
            city: clientCity,
            msg: clientMessage
        }]);

        setClientName("");
        setClientEmail("");
        setClientMobile("");
        setClientCompany("");
        setClientCity("");
        setClientMessgee("");
    }
    return (
        <div>
            <div className='about-container'>
                <Header />
                <div className="about-content">
                    <video autoPlay loop muted preload="true" src={video} id="bgVideo">
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="text-wrapper" id="text-wrapper-abt">
                        <h1>
                            <span>Fell Free To Contact Us</span>
                            <br />
                            CONTACT US
                        </h1>
                    </div>
                </div>
            </div>

            <div className="contact-container" style={{ filter: "brightness(90%)" }}>

                <div className="contact-box" >
                    <div className="contact-form">
                        <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Get A Free Consultation
                            <br /> <span style={{ fontSize: ".9rem", fontWeight: 'lighter', color: "#cd1e2d" }}>Fill out the form and we'll get back to you as soon as possible.</span>
                        </p>

                        <form action="" className='form'>
                            <div className="form-list">
                                <label >Name</label>
                                <input type="text" value={clientName}
                                    accept=".json,application/json"
                                    onChange={(e) => setClientName(e.target.value)} required />
                            </div>
                            <div className="form-list">
                                <label >Email</label>
                                <input type="text" value={clientEmail}
                                    onChange={(e) => setClientEmail(e.target.value)} required />
                            </div>
                            <div className="form-list">
                                <label >Phone</label>
                                <input type="text" value={clientMobile}
                                    onChange={(e) => setClientMobile(e.target.value)} required />
                            </div>
                            <div className="form-list">
                                <label >Message</label>
                                <textarea value={clientMessage}
                                    onChange={(e) => setClientMessgee(e.target.value)} />
                            </div>
                            <div className="form-list btn-cls">
                                <button id="sub-btn" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className="contact-card">
                        <div className="company-location" style={{ filter: "brightness(80%)" }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30848636.272120424!2d71.77394395548751!3d19.29529207914288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584d03d410a3%3A0x79e8132c3d3cdf88!2sKitkat%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1702288450105!5m2!1sen!2sin"

                                allowFullScreen=""
                                title="sk_map"
                                style={{ border: "1px solid rgba(255, 255, 255, 0.742)" }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            >
                            </iframe>


                        </div>

                        <div className="two-card">
                            <div className="address-card">
                                <div className="address-title">
                                    <p>CONTACT</p>
                                </div>
                                <div className="address-desc">
                                    <p>xyz block, abc road, lmnopq city - 632092</p>
                                    <br />
                                    <p>0221783023</p>
                                    <p>skengineers@gmail.com</p>
                                </div>
                            </div>
                            <div className="social-card">
                                <div className="social-title">
                                    <p style={{ marginLeft: "1.1rem" }}>SOCIAL</p>
                                </div>
                                <div className="social-logo">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <span><FaFacebookF /> &nbsp; Facebook</span>
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <span><FaInstagram />&nbsp; Instagram</span>
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.742)" }}>
                                        <span><FaXTwitter /> &nbsp; Twitter</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div style={{ marginTop: "10rem" }}>
                <HomeContact />
            </div>
        </div>
    )
}

export default Contact
