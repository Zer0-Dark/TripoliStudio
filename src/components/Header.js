import React from "react";
import logo from "../imgs/nav-logo.png"
import moreIcon from "../imgs/more-info-icon.png"
function Header() {



    return (
        <div className="navbar">
            <img src={logo} alt="logo" id="logo-nav"></img>
            <div className="nav-items">
                <img src={moreIcon} alt="more-info" id="moreIcon"></img>
                <a href="https://ibb.co/n3kbqJH">Prints</a>
                <a href="https://ibb.co/n3kbqJH">Tote bags</a>
                <a href="https://ibb.co/n3kbqJH">Stickers</a>
            </div>
        </div>
    )
}

export default Header;