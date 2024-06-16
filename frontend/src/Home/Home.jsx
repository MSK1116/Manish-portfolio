import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Home_banner from "./Home_banner";
import About from "../About/About";
import Contact from "../contact/Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Home_banner />
      <About />
      <Contact />
    </>
  );
};

export default Home;
