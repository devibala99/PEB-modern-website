import React, { useState } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import "../App.css"
import first from "../images/cabin2.jpg";
import second from "../images/agri.jpg";
import third from "../images/barns.jpg"
import fourth from "../images/prefabHouse2.jpg";
import fifth from "../images/sale.jpg"
const slides = [
    {
        image: first
    },
    {
        image: second
    },
    {
        image: third
    },
    {
        image: fourth
    },
    {
        image: fifth
    }
]
const HomeProjectSection = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === length - 1 ? 0 : current - 1);
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className='project-section'>
            <div className="project-content">
                <div className="pro-content">
                    <div className="pro-para">
                        <h2 style={{ fontSize: "1.4rem" }}>Our Projects</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cumque neque corporis corrupti libero reiciendis, aliquam voluptatibus harum quia quidem consequuntur similique ducimus est minus iusto impedit fugit natus deserunt necessitatibus id iure. Nam, molestiae? Non eligendi enim ullam ea autem, dignissimos, alias qui

                            <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam et aperiam doloribus necessitatibus delectus quod eum dignissimos fugit sequi quisquam. Quisquam cumque dolorem, maxime placeat consequuntur ullam tempora eaque molestiae fuga dolor

                        </p>
                        <div className='image-nav'>
                            <div id='prev-nav' onClick={prevSlide} style={{ cursor: 'pointer' }}>
                                <FaAngleLeft />
                            </div>
                            <div id="next-nav" onClick={nextSlide}>
                                <FaAngleRight />
                            </div>
                        </div>
                    </div>

                    <div className="pro-images">
                        <div className="slider-pro">
                            {
                                slides.map((slide, index) => {
                                    return (
                                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                            {index === current && (
                                                <div className='slideClick'>
                                                    <div className='slideReview'>
                                                        <img src={slide.image} alt="prefab" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeProjectSection
