import React from "react";
import Sponsers1 from "../icons/sponsens-1"
import Sponsers2 from "../icons/sponsers-2"
import Sponsers3 from "../icons/sponsers-3"
import Sponsers4 from "../icons/sponsers-4"

function Sponsers () {
    return (
        <section className="sponsers">
            <div className="container">
                <div className="sponsers-row">
                    <div className="sponsers-toptitle">Trusted by 4,000+ companies</div>
                    <div className="sponsers-desc">
                        <div className="desc 1">
                            <Sponsers1/>
                        </div>
                        <div className="desc 2">
                            <Sponsers2/>
                        </div>
                        <div className="desc 2">
                            <Sponsers3/>
                        </div>
                        <div className="desc 2">
                            <Sponsers4/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) 
}
export default Sponsers