import React from "react";
import "./Gallery.css";
import i1 from "../Images/i1.jpg";
import i2 from "../Images/i2.jpg";
import i3 from "../Images/i3.jpg";
import ei1 from "../Images/ei1.png";
import f1 from "../Images/f1.jpg";
import f2 from "../Images/f2.jpg";
import f3 from "../Images/f3.jpg";
export default function Gallery() {
  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);
  const showGallery = () => {
    console.log("Clicked");
    let e1g = document.querySelector(".slide img");
    e1g.src = ei1;
    let e2g = document.querySelector(".slide #i2");
    e2g.src = i2;
    let e3g = document.querySelector(".slide #i3");
    e3g.src = i3;
  };
  const showGalleryE2 = () => {
    // console.log("Clicked");
    let e1g = document.querySelector(".slide img");
    e1g.src = f1;
    let e2g = document.querySelector(".slide #i2");
    e2g.src = f2;
    let e3g = document.querySelector(".slide #i3");
    e3g.src = f3;
  };
  const showGalleryE3 = () => {
    let e1g = document.querySelector(".slide img");
    e1g.src = ei1;
    let e2g = document.querySelector(".slide #i2");
    e2g.src = f2;
    let e3g = document.querySelector(".slide #i3");
    e3g.src = f3;
  };
  return (
    <>
      <div className="main">
        <div id="cards">
          <pre>Insights Of Events</pre>
          <div className="e1" onClick={showGallery}>
            HactoberFest 2021ser
            <img src={ei1}></img>
          </div>
          <div className="e1" onClick={showGalleryE2}>
            Flutter BootCamp
            <img src={ei1}></img>
          </div>
          <div className="e1" onClick={showGalleryE3}>
            Web-Dev Bootcamp
            <img src={ei1}></img>
          </div>
        </div>
        <div className="GalleryPage">
          <div className="slider">
            <div className="slides">
              <input type="radio" name="radio-btn" id="radio1" />
              <input type="radio" name="radio-btn" id="radio2" />
              <input type="radio" name="radio-btn" id="radio3" />
              <input type="radio" name="radio-btn" id="radio4" />
              <div className="slide first">
                <img src={i1} alt="" />
              </div>
              <div className="slide">
                <img src={i2} alt="" id="i2" />
              </div>
              <div className="slide">
                <img src={i3} alt="" id="i3" />
              </div>
              <div className="slide">
                <img src={i2} alt="" id="i4" />
              </div>
              <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
              </div>
            </div>
            <div className="navigation-manual">
              <label for="radio1" className="manual-btn"></label>
              <label for="radio2" className="manual-btn"></label>
              <label for="radio3" className="manual-btn"></label>
              <label for="radio4" className="manual-btn"></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
