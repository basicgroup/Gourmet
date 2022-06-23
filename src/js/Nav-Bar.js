 import React from "react";
 import '../css/Nav-Bar.css';


 function NavBar(){
   return(
    <div className="Nav-Bar-Wrapper">
      <div className="Nav-Big">
        <a href="#header" className="Nav-Bar-But">Gourmet au Catering</a>
        <div className="Nav-Small">
            <a href="#about" className="Nav-Bar-But">About</a>
            <a href="#menu" className="Nav-Bar-But">Menu</a>
            <a href="#contact" className="Nav-Bar-But">Contact</a>
        </div>
      </div>
    </div>
   )
 }
 export default NavBar