import React from 'react'
import Sidebar from './Sidebar'
import nobg from "../images/logo1.png"
import "../stylesheets/header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="image-logo" style={{ position: "fixed" }}>
                <img src={nobg} alt="logo" />
            </div>
            <div className="menubar">
                <Sidebar />
            </div>
        </div>
    )
}

export default Header
