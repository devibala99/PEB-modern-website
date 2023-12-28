import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import "../stylesheets/sidebar.css"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    const toggleNavbar = () => {
        setShowNav(!showNav)
    }
    return (
        <div className='container-sidebar'>
            <motion.div className={`navbar ${showNav ? 'active' : ''}`}
                initial={{ x: '-100%' }}
                animate={{ x: showNav ? 0 : '-100%' }}
                transition={{ duration: .5 }}>
                <div>
                    <ul>
                        <li>
                            <Link to="/" style={{ color: "rgba(255, 255, 255, 0.433)", textDecoration: "none" }}>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={{ color: "rgba(255, 255, 255, 0.433)", textDecoration: "none" }}>
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/solutions" style={{ color: "rgba(255, 255, 255, 0.433)", textDecoration: "none" }}>
                                <span>Solutions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/project" style={{ color: "rgba(255, 255, 255, 0.433)", textDecoration: "none" }}>
                                <span>Project</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{ color: "rgba(255, 255, 255, 0.433)", textDecoration: "none" }}>
                                <span>Contact</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </motion.div>
            <div className={`sidebar ${showNav ? 'active' : ''}`} >
                <FaBars className="sidebar-toggle" onClick={toggleNavbar} />
            </div>

        </div>
    )
};

export default Sidebar;