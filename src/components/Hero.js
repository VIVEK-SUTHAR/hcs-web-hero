import React from "react";
import "./Hero.css";
// import logo from "../logohcs.png";
import { FaInstagramSquare, FaYoutubeSquare, FaDiscord } from "react-icons/fa";
import pic from "../indexpic.png";
export default function Hero() {
  window.onload = () => {
    let anime = document.querySelector("#text");
    anime.classList.add("animate__zoomInUp");
  };

  return (
    <div className="hero">
      <h1 className="animate__animated" id="text">
        Code
        <br />
        Collab
        <br /> Create
      </h1>
      <span id="social">
        <FaDiscord id="discord"></FaDiscord>
        <h6>
          <a href="https://discord.gg/Xu4RVnhE" target="_blank">
            Join Us
          </a>
        </h6>
      </span>
      <span id="pic">
      <img src={pic}></img></span>
      <span id="side-social">
        <FaDiscord id="discord"></FaDiscord>
        <FaInstagramSquare id="inst"></FaInstagramSquare>
      </span>
    </div>
  );
}
