import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { motion } from 'framer-motion'
import "../stylesheets/solution.css"
import Header from "./Header"
import video from "../images/roofingWork.mp4"
import "../stylesheets/threeCard.css"
import HomeContact from './HomeContact'
import gear from "../images/gear.png"
import ProjectTimeline from "./ProjectTimeline";

const Solutions = () => {
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
                            <span>Upgraded Solutions For Our Customers Dream Project</span>
                            <br />
                            OUR SOLUTIONS & SERVICES
                        </h1>
                    </div>
                </div>
            </div>
            <div className="about-content-para" id="ab-sec-para">
                <motion.div animate={controls} style={{ opacity: 0, y: -100 }}>

                    <div className="about-section" id="id-content-para" style={{ backgroundImage: `url(${gear})` }}>
                        <div className="section">
                            <div className="sa-content" id="sa-content">
                                <h1>SERVICES</h1>
                                <h4>WHICH MAKES US STAND OUT</h4>
                                <p>
                                    PEB stands for "Pre-Engineered Building," which refers to a structural building system that is pre-designed, fabricated, and manufactured off-site before being assembled on the construction site. PEB buildings are known for their efficiency, cost-effectiveness, and speed of construction compared to traditional buildings.
                                    <br />
                                    PEB building services encompass various stages of the construction process:
                                    <br />
                                    <p>1. <span> Design and Engineering: </span> PEB services involve the design and engineering of the building structure according to the client's specifications and requirements. Advanced software is used to create detailed plans and blueprints for the building.
                                    </p>
                                    <p>2. <span>Fabrication: </span>
                                        After the design phase, the components of the building are fabricated in a factory setting. This includes manufacturing steel frames, roofing systems, walls, and other structural elements according to the design specifications.
                                    </p>

                                    <p>3. <span>Transportation: </span>
                                        Once fabricated, the components are transported to the construction site for assembly. Due to their prefabricated nature, these components are often designed for easy transportation and quick assembly.
                                    </p>

                                    <p>4. <span>Installation and Assembly: </span> PEB buildings are assembled on-site by skilled workers using pre-engineered components. The assembly process is generally faster compared to traditional construction methods because many parts are already prepared and just need to be fitted together.
                                    </p>

                                    <p>5. <span>Customization and Finishing: </span>
                                        While PEB structures are pre-engineered, they can still be customized to meet specific architectural and functional requirements. Finishing touches such as insulation, interior walls, doors, and windows are added to complete the building.
                                    </p>

                                </p>
                            </div>

                        </div>

                        <div className="section-two">
                            <div className="sa-content" id="sa-content">
                                <h4>Benefits of PEB buildings and services include</h4>
                                <p><span>Cost-effectiveness: </span>
                                    PEB structures often result in cost savings due to reduced construction time, labor, and material wastage.
                                </p>
                                <p><span>Quick Construction:</span> These buildings can be erected faster than conventional structures, resulting in quicker project completion.
                                </p>
                                <p><span>Design Flexibility:</span> Despite being pre-engineered, PEB buildings can be customized to suit various architectural designs and functional needs.
                                </p>
                                <p><span>Durability and Strength:</span> PEB buildings are known for their strength and durability, often using high-quality steel that withstands various environmental conditions.
                                </p>
                                <p><span>Sustainability: </span>
                                    These buildings can be designed to be environmentally friendly, incorporating energy-efficient features and materials.
                                </p>
                            </div>
                        </div>
                    </div>

                </motion.div>


            </div>

            <motion.div animate={controls} style={{ opacity: 0, y: -200 }}>


                <div className="about-content-para">
                    <div className="about-section" id="id-solution-para">
                        <div className="section">
                            <div className="sa-content" id="sa-content-sol">

                            </div>

                        </div>
                        <div className="section-two" id="section-two-content">

                            <div className="sa-content" id="sa-content-sol">


                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div initial="hidden" animate={controlFadeIn} variants={fadeInVariants} >
                <div className="service-types-content">
                    <h1 id="service-type-title">OUR SERVICES</h1>
                    <section className="articles">
                        <article>
                            <div className="article-wrapper">
                                <figure id="figure1">

                                </figure>
                                <div className="article-body">
                                    <h2>Ceiling</h2>
                                    <p style={{ lineHeight: "1.8" }}>
                                        PEB system basically consists of steel structure like column and rafter, galvanized purlin & girt, sheeting for roof and cladding, and accessories.
                                    </p>

                                </div>
                            </div>
                        </article>
                        <article>

                            <div className="article-wrapper">
                                <figure id="figure2">

                                </figure>
                                <div className="article-body">
                                    <h2>Cladding</h2>
                                    <p style={{ lineHeight: "1.8" }}>
                                        Cladding is a layer or skin applied to a building's exterior.
                                        It can be made of wood, stone, or concrete. Cladding protects buildings from weather, wind, rain, and fire.
                                    </p>

                                </div>
                            </div>
                        </article>
                        <article>

                            <div className="article-wrapper">
                                <figure id="figure3">

                                </figure>
                                <div className="article-body">
                                    <h2>Roofing and Wall</h2>
                                    <p style={{ lineHeight: "1.8" }}>
                                        Roof and wall sheeting is connected to each other and other building components.
                                        Roofing can be designed as cool roofs which does not transmit heat over the body.
                                    </p>

                                </div>
                            </div>
                        </article>

                    </section>
                </div>
            </motion.div>

            <motion.div initial="hidden" animate={controlFadeIn} variants={fadeInVariants} >
                <div className="service-types-content">
                    <h1 id="service-type-title">OUR SOLUTIONS</h1>
                    <section className="articles">
                        <article>
                            <div className="article-wrapper">
                                <figure id="figureSolution1">

                                </figure>
                                <div className="article-body">
                                    <h2>Industrial Solutions</h2>
                                    <p style={{ lineHeight: "1.8" }}>
                                        PEBs industrial solutions are versatile and can be used for a wide range of applications. Industrial solutions are a perfect fit for large scale construction.
                                        They are easily expandable.
                                    </p>

                                </div>
                            </div>
                        </article>
                        <article>

                            <div className="article-wrapper">
                                <figure id="figureSolution2">

                                </figure>
                                <div className="article-body">
                                    <h2>Infrastructure</h2>
                                    <p style={{ lineHeight: "1.8" }}>
                                        PEBs are a cost-effective option for construction projects along with modern solution.
                                        They are flexible in design, allowing for optimization of the building's utilities for appearance and end-user experience.
                                    </p>

                                </div>
                            </div>
                        </article>
                        <article>

                            <div className="article-wrapper">
                                <figure id="figureSolution3">

                                </figure>
                                <div className="article-body">
                                    <h2>Warehouse</h2>
                                    <p style={{ lineHeight: "1.8" }}>
                                        PEB warehouses are made of prefabricated steel frames that are built in a factory and then assembled on-site. They are strong, durable, and can be built quickly and easily. PEB warehouses are also more energy-efficient than traditional warehouses, and they can be customized to meet the specific needs of the business.
                                    </p>

                                </div>
                            </div>
                        </article>

                    </section>
                </div>
            </motion.div>

            <motion.div initial="hidden" animate={controlFadeIn} variants={fadeInVariants} >
                <div className="section-use">
                    <div className="use-content" id="use-content">
                        <h1>WHERE TO USE ?</h1>
                        <div className="service-sector">
                            <p><span>Warehouses and Industrial Buildings:  </span>
                                PEBs are widely used for warehouses, distribution centers, manufacturing plants, and industrial facilities. They provide large, open spaces that are ideal for storage, manufacturing, and logistical operations.
                            </p>

                            <p>
                                <span>Commercial Buildings: </span>
                                Many commercial structures like shopping malls, retail outlets, supermarkets, offices, and showrooms utilize pre-engineered building systems due to their flexibility in design, allowing for customized spaces and cost-efficient construction.
                            </p>
                            <p><span>Agricultural Buildings: </span>
                                Farms, barns, storage sheds, and agricultural processing facilities often use PEBs due to their ability to create wide clear spans without the need for internal columns. This design facilitates easy movement of machinery and storage of agricultural produce.</p>
                            <p><span>Sports Arenas and Recreation Facilities: </span> PEBs are used in constructing sports complexes, indoor stadiums, gymnasiums, and recreational centers due to their ability to create large, column-free spaces required for sporting events and activities. </p>
                            <p><span>Educational Institutions: </span>Schools, colleges, and educational institutions often use pre-engineered structures for classrooms, auditoriums, gymnasiums, and administrative buildings due to their quick construction time and cost-effectiveness.</p>
                            <p><span>Cold Storage Facilities: </span>PEBs are also suitable for cold storage facilities such as refrigerated warehouses, food processing plants, and cold storage units due to their ability to maintain controlled environments.</p>
                        </div>
                        <div className="service-sector sector2">

                        </div>

                    </div>


                </div>
            </motion.div>

            <ProjectTimeline />

            <div style={{ height: "10vh" }}></div>
            <HomeContact />
        </div>
    )
}

export default Solutions
