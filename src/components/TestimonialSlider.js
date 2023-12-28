import React, { useState, useEffect } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { motion, useAnimation } from 'framer-motion';
import "../stylesheets/testimonialSlider.css"
const slides = [
    {
        id: 1, testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nemo iste sunt explicabo a eaque quos natus corrupti commodi quas eum cum, facere, minus totam!",
    },
    {
        id: 2, testimonial: "We were very pleased with the work that [company name] did on our home. They were professional, efficient, and the finished product looks great. We would definitely recommend them to others."
    },
    {
        id: 3, testimonial: "We were very happy with the work that [company name] did on our new house. They were responsive to our needs, flexible with our schedule, and the finished product is exactly what we wanted. We would definitely recommend them to others."
    },
    {
        id: 4, testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nemo iste sunt explicabo a eaque quos natus corrupti commodi quas eum cum, facere, minus totam!"
    }
]
const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const [scrollY, setScrollY] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY, controls]);

    useEffect(() => {
        controls.start({
            x: scrollY * 1.2, // adjist the multiplier to control the speed and direction of the movement
            opacity: Math.max(0, 1 - scrollY / window.innerHeight),
            // fade out based on scroll position
        })
    })
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === length - 1 ? 0 : current - 1);
        console.log("prevslide");
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <motion.div animate={controls}>
            <section className='slider'>

                {slides.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}

                            key={index}
                        >
                            {index === current && (
                                <div className='slideClick'>
                                    <div className='slideReview'>
                                        <p>
                                            {slide.testimonial}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                <div className='slideChange'>
                    <div className='left-arrow' onClick={prevSlide} >
                        <FaAngleLeft />
                    </div>
                    <div className='right-arrow' onClick={nextSlide} >
                        <FaAngleRight />
                    </div>

                </div>
            </section>
        </motion.div>
    )
}

export default TestimonialSlider

/**
    <div className='slideId'>{slide.id}</div>
 */