import React from "react";
import Hamburger from "../images/hamburger.jpg";
import "../css/Header.css";

function Header(){
    return (
        <header className="Header" id="header">
            <img className="Header-image" src={Hamburger} alt="hamburger"/>
            <div className="Header-content-wrap">
                <h1 className="Header-content">
                     Le Catering
                </h1>
            </div>
        </header>
    )
}

export default Header