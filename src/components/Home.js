import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import "../App.css"
import bgVideo from '../images/nightview.mp4'
import Header from "./Header"
import TestimonialSlider from "./TestimonialSlider";
import HomeAbout from "./HomeAbout";
import { motion } from 'framer-motion'
import HomePictureSection from "./HomePictureSection";
import WorkHome from "./WorkHome";
import HomeProjectSection from "./HomeProjectSection";
import HomeContact from "./HomeContact";

const Home = () => {
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
        <div className="App">
            <video autoPlay loop muted preload="true" src={bgVideo} >
                <source src={bgVideo} type="video/mp4" />
            </video>
            <Header />
            <div className="text-wrapper">
                <h1>
                    <span >Upgraded Smart Solutions</span>
                    <br />
                    Pre Engineered<br />Buildings
                </h1>
            </div>

            <TestimonialSlider />

            <motion.div animate={controls} style={{ opacity: 0, y: -200 }}>
                <HomeAbout />
            </motion.div>

            <motion.div initial="hidden" animate={controlFadeIn} variants={fadeInVariants} >
                <HomePictureSection />
            </motion.div>

            <motion.div initial="hidden" animate={controlFadeIn} variants={fadeInVariants}>
                <HomeProjectSection />
            </motion.div>

            <div>
                <WorkHome />
            </div>

            <HomeContact />

        </div>
    );
}
export default Home;

