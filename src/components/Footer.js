import React from "react";
import "./Style.css";
import '../Assets/mobirise-icons/mobirise-icons.css';

import "../Assets/bootstrap/css/bootstrap.min.css";
import "../Assets/bootstrap/css/bootstrap-grid.min.css";
import "../Assets/bootstrap/css/bootstrap-reboot.min.css";
import "../Assets/bootstrap/css/bootstrap.min.css";
import '../Assets/socicon/css/styles.css';
import "../Assets/theme/css/style1.css";

const Footer = props => (

<footer>
<section once="footers" className="footer" id="footer7-9">
    <div className="container">
        <div className="row row-links">
                    <ul className="foot-menu">
                        <li className="foot-menu-item mbr-fonts-style display-7">
                            <a className="text-white mbr-bold" href="/">About us</a>
                        </li>
                        <li className="foot-menu-item mbr-fonts-style display-7">
                            <a className="text-white mbr-bold" href="/">
                            Become a Volunteer</a>
                        </li>
                        <li className="foot-menu-item mbr-fonts-style display-7">
                            <a className="text-white mbr-bold" href="/">Get In Touch</a>
                        </li>
                        <li className="foot-menu-item mbr-fonts-style display-7">
                            <a className="text-white mbr-bold" href="/">Careers</a>
                        </li>
                        <li className="foot-menu-item mbr-fonts-style display-7">
                            <a className="text-white mbr-bold" href="/" target = "_blank">Work</a>
                        </li></ul>
                </div>
            <div className="media-container-row align-center mbr-white">
                <div className="row social-row">
                    <div className="social-list align-right pb-2">
                        <div className="soc-item">
                            <a href={{'https':'//twitter.com/mobirise'}} target="/">
                                <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                        <div className="soc-item">
                            <a href="https://www.facebook.com/pages/Mobirise/1616226671953247">
                                <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                        <div className="soc-item">
                            <a href="https://www.youtube.com/c/mobirise" target="/">
                                <span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                        <div className="soc-item">
                            <a href="https://instagram.com/mobirise" target="/">
                                <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                        <div className="soc-item">
                            <a href="https://plus.google.com/u/0/+Mobirise" target="/">
                                <span className="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                        <div className="soc-item">
                            <a href="https://www.behance.net/Mobirise" target="/">
                                <span className="socicon-behance socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row row-copirayt">
                    <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                        © Copyright 2020 HOMBOUND - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </section>
    </footer>
)


export default Footer;
