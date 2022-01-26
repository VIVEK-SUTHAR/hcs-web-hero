import React from "react";
import logo from "../logo-final.png";
import { Link } from "react-router-dom";
export default function navbar() {
  const showNav = () => {
    const menu = document.querySelector(".mobilenav");
    menu.style.opacity=1;
    menu.style.height ="50%";
  };
  const hideNav=()=>{
    const menu = document.querySelector(".mobilenav");
    menu.style.height = 0; 
  }
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <img src={logo}></img>
          <a href="#"></a>
          <h2>
            <span>H</span>ACK
            <span>C</span>LUB
            <span>S</span>VIT
          </h2>
        </div>
        <ul className="menu-list">
          <div className="icon cancel-btn">
            <i className="fas fa-times"> </i>
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
        <div className="icon menu-btn" onClick={showNav}>
          <i className="fas fa-bars"> </i>
        </div>
      </div>
      {/* Mobile NavigationBar */}
      <div className="mobilenav">
      <div className="icon cancel-btn" onClick={hideNav}>
            <i className="fas fa-times"> </i>
          </div>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
      </div>
    </nav>
  );
}
