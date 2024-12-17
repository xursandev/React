import React from "react";
import HeaderMenu from "../icons/header-menu";

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <div className="header-logo">Digital Agency</div>
                    <div className="header-nav">
                        <a className="header-nav__ui" href="#">home</a>
                        <a className="header-nav__ui" href="#">About</a>
                        <a className="header-nav__ui" href="#">Testimonials</a>
                        <a className="header-nav__ui" href="#">contact</a>
                    </div>
                    <button className="header-menu">
                        <HeaderMenu/>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header