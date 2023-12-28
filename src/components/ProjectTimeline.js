import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import "../stylesheets/timeline.css"
import "../stylesheets/projectTimeline.css"
import img1 from "../images/crop-architect-opening-blueprint.jpg"
import img2 from "../images/check.jpg"
import img3 from "../images/fullstep.jpg"
import img4 from "../images/num1.jpg"
import img5 from "../images/Construction-Handover.jpg"

const ProjectTimeline = () => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    // Select all image wrappers
    const imageWrappers = document.querySelectorAll(
        ".vertical-slider.desktop-only .left-side .image-wrapper"
    );

    function callback(entries, observer) {
        entries.forEach((entry) => {
            const currentContentWrapper = entry.target;
            const index = parseInt(currentContentWrapper.dataset.index);

            if (entry.isIntersecting) {
                currentContentWrapper.classList.add("in-view");

                if (imageWrappers[index]) {
                    imageWrappers[index].classList.add("show");
                    for (let i = index + 1; i < imageWrappers.length; i++) {
                        imageWrappers[i].classList.remove("show");
                    }
                }
            } else {
                currentContentWrapper.classList.remove("in-view");
            }
        });
    }

    // Interaction Observer for each content section (right side)
    const observer = new IntersectionObserver(callback, options);
    const contentWrappers = document.querySelectorAll(
        ".vertical-slider.desktop-only .right-side .content-wrapper"
    );

    contentWrappers.forEach((wrapper) => {
        observer.observe(wrapper);
    });
    return (
        <div className="timeline-pro-container">
            <h2 style={{ color: "rgba(255,255,255,0.433)" }}>STEPS INVOLVED IN OUT PROJECT</h2>
            <div class="desktop-only vertical-slider" id="timeline-pro-container">
                <div class="left-side">
                    <div class="sticky">
                        <div class="image-wrapper absolute-full show" data-index="0">
                            <div class="mask-outer absolute-full">
                                <div class="mask-inner absolute-full">
                                    <img src={img1} alt="building" />
                                </div>
                            </div>
                        </div>
                        <div class="image-wrapper absolute-full" data-index="1">
                            <div class="mask-outer absolute-full">
                                <div class="mask-inner absolute-full">
                                    <img src={img2} alt="building" />
                                </div>
                            </div>
                        </div>
                        <div class="image-wrapper absolute-full" data-index="2">
                            <div class="mask-outer absolute-full">
                                <div class="mask-inner absolute-full">
                                    <img src={img3} alt="building" />
                                </div>
                            </div>
                        </div>
                        <div class="image-wrapper absolute-full" data-index="2">
                            <div class="mask-outer absolute-full">
                                <div class="mask-inner absolute-full">
                                    <img src={img4} alt="building" />
                                </div>
                            </div>
                        </div>
                        <div class="image-wrapper absolute-full" data-index="2">
                            <div class="mask-outer absolute-full">
                                <div class="mask-inner absolute-full">
                                    <img src={img5} alt="building" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="right-side">
                    <section class="content-wrapper" data-index="0">
                        <div class="content">
                            <h2>01. Planning and Design Phase</h2>
                            <p><span>Project Requirement Analysis </span>Define the purpose of the building, space requirements, expected load-bearing capacity, and desired layout.</p>
                            <p><span>Site Evaluation </span>
                                Assess the location, soil conditions, topography, and local building codes and regulations.</p>

                            <p><span>Customizatione </span> Choose from standard designs or create a custom design based on specific needs, considering factors like size, layout, architectural features, and aesthetic preferences.</p>
                        </div>
                    </section>
                    <section class="content-wrapper" data-index="1">
                        <div class="content">
                            <h2>02. Engineering and Fabrication</h2>
                            <p><span>Structural Engineering  </span>Engineers create detailed structural designs based on the building requirements, ensuring the design meets safety standards and local building codes.</p>
                            <p><span>Material Selection </span>
                                Select appropriate materials such as steel for framing, roofing, wall cladding, insulation, and accessories like doors, windows, and ventilation systems.</p>

                            <p><span>Fabrication of Components </span> The building components (columns, rafters, beams, panels, etc.) are fabricated off-site according to the engineered designs. Precision manufacturing ensures components fit together seamlessly during construction.</p>
                        </div>
                    </section>
                    <section class="content-wrapper" data-index="2">
                        <div class="content">
                            <h2>03. Construction Phase</h2>
                            <p><span>Site Preparation </span>Clearing the construction site, leveling the ground, and preparing the foundation as per the building design specifications.</p>
                            <p><span>Erection of Components </span>
                                Assemble and erect the prefabricated components on-site using specialized equipment. Bolting or welding components together based on the design plans
                                .</p>

                            <p><span>Roofing and Cladding </span> Install roofing panels, wall cladding, insulation, and other necessary components to weatherproof the structure.</p>
                            <p><span>Finishing Touches </span>Install doors, windows, interior partitions, and finishing materials as required for the building's functionality and aesthetics.</p>

                        </div>
                    </section>
                    <section class="content-wrapper" data-index="3">
                        <div class="content">
                            <h2>04. Quality Checks and Safety Measures</h2>
                            <p><span>Quality Assurance </span> Conduct quality checks during manufacturing and construction to ensure the components meet required standards and specifications.</p>
                            <p><span>Safety Protocols </span>
                                Adhere to safety regulations and guidelines throughout the construction process to ensure the safety of workers and compliance with industry standards.</p>

                        </div>
                    </section>
                    <section class="content-wrapper" data-index="4">
                        <div class="content">
                            <h2>05. Project Completion and Handover</h2>
                            <p><span>Final Inspections </span>Conduct final inspections and tests to ensure the building meets all quality standards, safety requirements, and client specifications.</p>
                            <p><span>Documentation and Handover </span>
                                Complete documentation, obtain necessary certifications, and hand over the building to the client.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProjectTimeline
