import React from "react";
import AboutImg1 from "/src/images/about-img-3.png"
import AboutImg2 from "/src/images/about-img-2.png"
import AboutImg3 from "/src/images/about-img.png"

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about-row">
                    <div className="about-top">
                        <div className="about-top__toptitle">TESTIMONIALS</div>
                        <div className="about-top__title">Read What Other <br /> have to Say</div>
                    </div>
                    <div className="about-bottom">
                        <div className="about-bottom-box">
                            <img src={AboutImg1} alt="" />
                            <div className="about-title">
                                Andrew Rathore
                            </div>
                            <div className="about-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                            </div>
                        </div>
                        <div className="about-bottom-box">
                            <img src={AboutImg2} alt="" />
                            <div className="about-title">
                            Vera Duncan
                            </div>
                            <div className="about-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                            </div>
                        </div>
                        <div className="about-bottom-box">
                            <img src={AboutImg3} alt="" />
                            <div className="about-title">
                            Mark Smith
                            </div>
                            <div className="about-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About