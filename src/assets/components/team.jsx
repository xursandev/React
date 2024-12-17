import React from "react";
import TeamImg from "/src/images/team-img-2.png"


function Team() {
    return (
        <section className="team">
            <div className="container">
                <div className="team-row">
                    <div className="team-right">
                        <img src={TeamImg} alt="img" />
                    </div>
                    <div className="team-left">
                        <div className="team-title">Be a part of the <br /> next big thing</div>
                        <div className="team-sub">
                            We work with Brans, Startups, to SMEs. <br /> Colaborate for more impact and growt
                        </div>
                        <button className="team-btn">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team