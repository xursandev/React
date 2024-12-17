import React from "react";
import CustomeIcon from "../icons/custome"
import CustomeImg from "/src/images/custome-img.png"

function Custome() {
    return(
    <section className="custome">
        <div className="container">
            <div className="custome-row">
                <div className="custome-left">
                    <div className="custome-left__title">
                        Custome & Plugin Development
                    </div>
                    <div className="custome-left__desc">
                        Commonly used in the graphic, print & publishing <br /> industris for previewing visual layout and <br /> mockups
                    </div>
                    <div className="custome-btn">
                        <CustomeIcon/>
                    </div>
                </div>
                <div className="custome-right">
                    <img src={CustomeImg} alt="Img" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Custome