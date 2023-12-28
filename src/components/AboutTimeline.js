import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../stylesheets/timeline.css"
import { FaUsers, FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";

const AboutTimeline = () => {

    const paraStyle = {
        fontSize: "1.1rem"
    }
    const bg = {
        filter: 'brightness(80%)',
    }
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                style={bg}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2023- present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaLocationDot />
                }
            >

                <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.4rem" }}>Sixth Mile Stone</h3>
                <h4 className="vertical-timeline-element-subtitle">Industry Building</h4>
                <p style={paraStyle}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sunt totam in dolorem cumque saepe ea atque perspiciatis tempora facilis!
                </p>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="August 2021"
                style={bg}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaLocationDot />
                }
            >
                <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.4rem" }}>Fifth Mile Stone</h3>
                <h4 className="vertical-timeline-element-subtitle">Agricultural Warehouse</h4>
                <p style={paraStyle}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est recusandae nisi ipsum, laboriosam consequuntur ipsa?
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="October 2019"
                style={bg}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaLocationDot />
                }
            >
                <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.4rem" }}>Fourth Mile Stone</h3>
                <h4 className="vertical-timeline-element-subtitle">Three Storey Portable Cabin.</h4>
                <p style={paraStyle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere sapiente obcaecati nisi ducimus earum!
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="July 2018"
                style={bg}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaLocationDot />
                }
            >
                <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.4rem" }}>Third Mile Stone</h3>
                <h4 className="vertical-timeline-element-subtitle">Expanding Industrial Area</h4>
                <p style={paraStyle}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore at veniam fuga voluptate quidem mollitia? Et maiores temporibus expedita rerum laboriosam dignissimos eligendi, perspiciatis hic.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="December 2017"
                style={bg}
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaLocationDot />
                }
            >
                <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.4rem" }}>Second Mile Stone</h3>
                <h4 className="vertical-timeline-element-subtitle">Cement Factory at Coimbatore</h4>
                <p style={paraStyle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores ipsum deserunt omnis molestias facilis reprehenderit accusamus magnam quidem eaque!
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2016"
                style={bg}
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaLocationDot />
                }
            >
                <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.4rem" }}>Our First Mile Stone</h3>
                <h4 className="vertical-timeline-element-subtitle">Building Warehouse</h4>
                <p style={paraStyle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quas cupiditate ratione optio voluptatibus animi?
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016"
                style={bg}
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaUsers />
                }
            >
                <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.4rem" }}>S.K.Engineers</h3>
                <h4 className="vertical-timeline-element-subtitle">Founded</h4>
                <p style={paraStyle}>
                    We are team of engineers,founded S.K.Engineers Pre-Engineered Steel Buildings at the year of 2016.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                style={bg}
                icon={<FaBuilding />
                }
            />
        </VerticalTimeline>
    )
}

export default AboutTimeline
