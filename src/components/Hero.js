import React from "react";
import "./Hero.css";
// import logo from "../logohcs.png";
import { FaInstagramSquare, FaYoutubeSquare, FaDiscord } from "react-icons/fa";
import pic from "../indexpic.png"
export default function Hero() {
  return (
    <div className="hero">
      <h1>
        Code
        <br />
        Collab
        <br /> Create
      </h1>
      <span id="social">
        <FaDiscord></FaDiscord>
        <h6>Join Us</h6>
      </span>
     <img src={pic}></img>
    </div>
  );
}