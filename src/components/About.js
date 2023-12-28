import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { motion } from 'framer-motion'
import "../App.css"
import Header from './Header';
import "../stylesheets/aboutSlider.css"
import HomeContact from "./HomeContact"
import video from "../images/construction.mp4"
import AboutTimeline from './AboutTimeline';
import plant from "../images/env2.jpeg"
import quality from "../images/q1.jpg"
import legal from "../images/legalstamp.jpeg"

const About = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY;

            if (yPos > 100 && yPos < 600) {
                controls.start({
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5 },
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

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
                            <span>WE STRIVE TO DO OUR BEST</span>
                            <br />
                            KNOW ABOUT US
                        </h1>
                    </div>
                </div>
            </div>
            <div className="about-content-para" id="ab-sec-para">
                <motion.div animate={controls} style={{ opacity: 0, y: -100 }}>

                    <div className="about-section" id="id-content-para">
                        <div className="section">
                            <div className="sa-content" id="sa-content">
                                <h1>KNOW US</h1>
                                <h4>We Strive to Build Our Customers Dream</h4>
                                <p>
                                    S.K ENGINEERS was established in 2016 at the prime location of Coimbator which is ISO 9001-2015 and ISO 14001:2015 certified company. We grew as trusted company over a period of time.
                                    <br /><br />
                                    We have great team of engineers who design and build Pre-Engineered Buildings in vast variety includes warehouse, industries, infrastructural buildings like school, shop, hospital, office, automobiles, logistics, etc. We provide client support to custom their buildings based on their needs. Diverse range of building designs, project management, support is our strength.
                                </p>
                            </div>

                        </div>

                        <div className="section-two">
                            <div className="sa-content" id="sa-content">
                                <h4 style={{ fontSize: "1.4rem" }}>WHAT MAKES US DIFFERENT</h4>
                                <p>

                                    Pre-engineered steel buildings stand out for their remarkable attributes. Their streamlined construction process, involving off-site fabrication and quick assembly, reduces construction timelines significantly while offering cost-effective solutions. Steel's inherent strength ensures durability against various environmental elements, and its recyclability promotes eco-friendliness.
                                    <br />
                                    These structures boast unparalleled customization, enabling diverse layouts and expansion possibilities without compromising structural integrity. Their versatility spans across multiple industries, providing reliable solutions for warehouses, factories, offices, and more. Moreover, the low maintenance requirements, energy efficiency options, and stringent quality control measures further underscore the appeal of pre-engineered steel buildings, positioning them as a durable, adaptable, and sustainable choice in the construction landscape.
                                </p>
                            </div>
                        </div>
                    </div>

                </motion.div>


            </div>
            <div className="timeline-container">
                <h2 style={{ color: "#fff", marginBottom: "5rem", filter: "brightness(50%)" }}>OUR ACHIEVEMENTS</h2>
                <AboutTimeline />
            </div>

            <div className="third-half">
                <div className='text-fast'>
                    <h2>OUR POLICIES</h2>
                    <p>We are very concious about our policies we follow in our company.</p>
                </div>

                <div className='cards-fast'>
                    <div className='card' id="card1">
                        <img src={plant} alt="environment" />
                        <div className='card-text' id="card-text1">
                            <h3>Environment</h3>
                            <p>
                                Our environmental policy is the impactful process. We limit hazardous wastes and material for the cause of avoid polluting the environment in anyways.
                            </p>
                        </div>
                    </div>
                    <div className='card' id="card2">
                        <img src={quality} alt="environment" />
                        <div className='card-text' id="card-text2">
                            <h3>Quality</h3>
                            <p>
                                Quality is our policy we never risk. We provide products with great quality and service with our team. We value people and time.
                            </p>
                        </div>
                    </div>
                    <div className='card' id="card3">
                        <img src={legal} alt="honest" />
                        <div className='card-text' id="card-text3">
                            <h3>Legal</h3>
                            <p>
                                We follow standard construction contracts and procedures to avoid legal complications. It builds trust between our customer's and us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <HomeContact />
        </div >
    )
}

export default About

