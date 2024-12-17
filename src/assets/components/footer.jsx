import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-side">
                        <div className="footer-left">
                            <div className="left-1">
                                <div className="left-1__title">
                                    Digital Agency
                                </div> <br /> <br />
                                <div className="left-1__desc">
                                    Building digital products, <br />
                                    brands & experience
                                </div>
                            </div>
                            <div className="left-2">
                                <a href="#" className="left-2__title">Resources</a><br />
                                <a className="left-2__desc" href="#">Guides</a>
                                <a className="left-2__desc" href="#">Blog</a>
                                <a className="left-2__desc" href="#">Cuistomer Stories</a>
                                <a className="left-2__desc" href="#">Glossery</a>
                            </div>
                        </div>
                        <div className="footer-right">
                            <div className="right-1">
                                <a href="#" className="right-1__title">Company</a><br />
                                <a className="right-1__desc" href="#">About Us</a>
                                <a className="right-1__desc" href="#">Careers</a>
                                <a className="right-1__desc" href="#">Partners</a>
                                <a className="right-1__desc" href="#">Contact Us</a>
                            </div>
                            <div className="right-2">
                                <a href="#" className="right-2__title">Social Media</a><br />
                                <a className="right-2__desc" href="#">LinkedIn</a>
                                <a className="right-2__desc" href="#">Facebook</a>
                                <a className="right-2__desc" href="#">Instagram</a>
                                <a className="right-2__desc" href="#">Twitter</a><br />
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">© Matheus. Todos os direitos reservados</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer