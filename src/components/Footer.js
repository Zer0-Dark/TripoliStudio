import React from "react";
import logo from "../imgs/tripolis.png"
import instagram from "../imgs/Instagram_icon.png"
import facebook from "../imgs/facebookcolored.png"
function Footer() {

    return (
        <div className="footer">
            <div className="footer-up">
                <div className="footer-logo">
                    <img src={logo} alt="logo" id="footerLogo"></img>
                    <div className="footer-media">
                        <a href="https://www.facebook.com/profile.php?id=100090567190162&mibextid=ZbWKwL"><img src={facebook} alt="facebook"></img></a>
                        <a href="https://instagram.com/tripolistudio?igshid=YmMyMTA2M2Y="><img src={instagram} alt="instagram"></img></a>
                    </div>
                </div>
                
                <div className="contact">
                    <p className="head-p">Contact Us</p>
                    <p>elbedawey11@gmail.com</p>
                    <p>+201278113255</p>
                </div>
                <div className="categories">
                    <p className="head-p">Categories</p>
                    {/* <a><p className="a">Posters</p></a>
                    <a><p className="a">Tote bags</p></a>
                    <a><p className="a">Stickers</p></a> */}
                </div>
            </div>
            <div className="footer-down">
                <a href="https://web.facebook.com/abdulrahman.ehab.773/"><p>@2023 Made by Abdulrahman Ehab All rights Reserverd</p></a>
            </div>
        </div>
    )
}

export default Footer;