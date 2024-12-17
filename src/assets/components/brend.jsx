import React from "react";
import BrendImg from "/src/images/brend-2-img.png"
import BrendIcon from "../icons/brend-right"

function Brend() {
    return (
        <section className="brend">
            <div className="container">
                <div className="brend-row">
                    <div className="brend-left">
                        <img src={BrendImg} alt="iges" />
                    </div>
                    <div className="brend-right">
                        <div className="brend-right__title">Branding & Design <br /> system</div>
                        <div className="brend-right__desc">
                            Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups
                        </div>
                        <button className="brend-btn">
                            <BrendIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brend