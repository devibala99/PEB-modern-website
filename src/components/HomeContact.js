import React from 'react'
import { FaPhone, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
const HomeContact = () => {
    return (
        <div className='home-contact-section'>
            <div className="contact-section">
                <h1>Take To Us For Your Project</h1>
            </div>
            <div className="contact-details">
                <div className="contact-num">
                    <span>
                        <FaPhone />&nbsp;  0221783023
                    </span>
                </div>
                <div className="contact-email">
                    <span>
                        <FaEnvelope />&nbsp; skengineers@gmail.com</span>
                </div>
                <div className="contact-location">
                    <span>
                        <FaLocationDot />&nbsp; xyz Block, abc Road, lmnopq City - 632092
                    </span>
                </div>
            </div>
            <div className="copywrite">
                <div className="copy">
                    <p>@copywrite 2023</p>
                </div>
                <div className="social">
                    <p>
                        <FaFacebookF /> &nbsp;&nbsp;
                        <FaInstagram /> &nbsp;&nbsp;
                        <FaXTwitter /> &nbsp;&nbsp;
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeContact
