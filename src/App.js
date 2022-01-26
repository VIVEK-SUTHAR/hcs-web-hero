import React from "react";
import Navbar from "./components/navbar";
import "./components/navbar.css";
import "./components/Hero.css";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Switch, Route, Link,Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Hero/>} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      </Router>
    </>
  );
}
