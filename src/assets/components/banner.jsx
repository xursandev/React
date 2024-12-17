import React from "react";
import BannerImg from "/src/images/banner-img.png"

function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-row">
                    <div className="banner-left">
                        <div className="banner-title">Building digital products, brands & experience</div>
                        <div className="banner-sub">
                            Digital Agency is your online team mangement tool that easy and prompt
                        </div>
                        <button className="banner-btn">Contact Us</button>
                    </div>
                    <div className="banner-right">
                        <img className="banner-img" src={BannerImg} alt="banner img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner