import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { motion } from 'framer-motion'
import Header from "./Header"
import video from "../images/industry.mp4"
import gear from "../images/gear.png"
import ImageGrid from "./ImageGrid";
import "../stylesheets/project.css"
import HomeContact from "./HomeContact";

const Projects = () => {
    const controls = useAnimation();
    const controlFadeIn = useAnimation();
    // fadein
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                controlFadeIn.start("visible");
            }
            else {
                controlFadeIn.start("hidden");
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controlFadeIn]);

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


    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    };
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
                            <span>See Our Work & Happy Customers</span>
                            <br />
                            OUR PROJECTS
                        </h1>
                    </div>
                </div>
            </div>

            <div className="about-content-para" id="ab-sec-para">
                <motion.div animate={controls} style={{ opacity: 0, y: -100 }}>

                    <div className="about-section" id="id-content-para" style={{ backgroundImage: `url(${gear})` }}>
                        <div className="section">
                            <div className="sa-content" id="sa-content">
                                <h1>REASONS TO STANDOUT</h1>
                                <h4>How We Give Importance To Detail</h4>
                                <p>

                                    <p><span>1. Custom Design and Planning: </span> We excel in designing PEBs that meet diverse requirements, considering factors like size, purpose, and architectural preferences.
                                    </p>
                                    <p><span>2. Engineering Expertise: </span>
                                        Our team comprises skilled engineers who ensure structural integrity, adherence to safety standards, and compliance with local building codes.
                                    </p>

                                    <p><span>3. Quality Fabrication: </span>
                                        We emphasize precision manufacturing of PEB components off-site, ensuring accurate and efficient assembly during on-site construction.
                                    </p>

                                    <p><span>4. Efficient Construction:  </span>  With streamlined processes and efficient methods, we execute timely and cost-effective PEB installations, minimizing project timelines.
                                    </p>

                                    <p><span>5. Versatility and Adaptability: </span>
                                        Our PEB solutions cater to various industries, providing versatile spaces suitable for warehouses, industrial facilities, commercial structures, and more.
                                    </p>
                                    <p><span>6. Durability and Reliability: </span>
                                        We prioritize the use of quality materials and construction techniques, ensuring durability, resilience, and long-term performance of our PEBs.
                                    </p>
                                    <p><span>7. Tailored Solutions: </span>
                                        We collaborate closely with clients, offering personalized consultation to understand their unique needs and delivering tailored PEB solutions accordingly.
                                    </p>
                                    <p><span>8. Commitment to Excellence: </span>
                                        Our commitment to excellence is reflected in our attention to detail, quality assurance measures, and dedication to exceeding client expectations.
                                    </p>
                                    <p><span>9. Sustainable Practices: </span>
                                        We integrate sustainable practices wherever possible, focusing on energy efficiency and eco-friendly construction methods in our PEB projects.
                                    </p>
                                    <p><span>10. Client Satisfaction: </span> Ultimately, our goal is to achieve utmost client satisfaction by delivering reliable, innovative, and cost-efficient PEB solutions that align with their visions and requirements.
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="section-two">
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate={controlFadeIn} variants={fadeInVariants} >
                <div className="project-container">
                    <div className="gallery-container">
                        <ImageGrid />
                    </div>
                </div>
            </motion.div>


            <div style={{ height: "10rem" }}></div>
            <HomeContact />
        </div>
    )
}

export default Projects
