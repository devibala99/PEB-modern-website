import React, { useState } from 'react';
import pic1 from '../images/s1.jpg'
import pic2 from '../images/interior.jpg'
import pic3 from '../images/s3.jpg'
import industry from "../images/construction.png"
import infrastructure from "../images/infrastructure.png";
import warehouse from "../images/warehouse.png"
import eye from "../images/eye.png"


const WorkHome = () => {
    const [bgImage, setBgImage] = useState(0);

    const images = [
        pic2, pic3, pic1
    ];

    const changeBackground = () => {
        setBgImage((prevIndex) => (prevIndex + 1) % images.length);
    }
    const divStyle = {
        backgroundImage: `url(${images[bgImage]})`,
    }

    return (
        <div className='work-home-container'>
            <div className='works' style={divStyle}>
                <div className="work-desc">
                    <div className="work-home-content content1" onClick={changeBackground}>

                        <h1>Industry</h1>

                        <p>
                            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci dicta odio quod inventore sunt repudiandae vel ad beatae corporis, nisi numquam architecto quibusdam quo.
                        </p>

                        <div className='flex-img'>
                            <img src={industry} alt="logowork" />
                            <img src={eye} alt="logowork" />
                        </div>
                    </div>
                    <div className="work-home-content content2" onClick={changeBackground}>
                        <h1>Infrastructure</h1>
                        <p>
                            2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci dicta odio quod inventore sunt repudiandae vel ad beatae corporis, nisi numquam architecto quibusdam quo.
                        </p>
                        <div className='flex-img'>
                            <img src={infrastructure} alt="logowork" />
                            <img src={eye} alt="logowork" />
                        </div>
                    </div>
                    <div className="work-home-content content3" onClick={changeBackground}>
                        <h1>Warehouse</h1>
                        <p>
                            3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci dicta odio quod inventore sunt repudiandae vel ad beatae corporis, nisi numquam architecto quibusdam quo.
                        </p>
                        <div className='flex-img'>
                            <img src={warehouse} alt="logowork" />
                            <img src={eye} alt="logowork" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WorkHome
