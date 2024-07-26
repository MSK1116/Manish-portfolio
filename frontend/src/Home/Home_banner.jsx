import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";
import img1 from "../../public/JPG_manish_High.png";
import img2 from "../../public/JPG_manish_Low.png";
import img3 from "../../public/IMG_20240721_184859.png";
import img4 from "../../public/MSK.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Home_banner = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container px-4 md:px-20 mt-20 h-screen ">
        <div className="flex flex-col  md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to my small world!</span>
            <div className="flex gap-x-1 text-2xl  md:text-4xl">
              <h1>Hello, i'm a</h1>
              {/* <span className=" text-blue-800 font-bold">Devloper</span> */}
              <ReactTyped className=" text-blue-800 font-bold" strings={["Student.", "Devloper.", "Social Activist.", "Photographer."]} typeSpeed={40} backSpeed={50} loop={true} />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Balancing the demands of being a student, researcher, web developer, social activist, and photographer, I strive to make a difference through education, technology and my passion. My passion for exploring new things extends beyond the
              classroom, and I am committed to making a positive impact through my organization for the welfare of society.”
            </p>
            <br />
            {/* social media icon */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-between">
              <div className=" gap-y-2 space-y-2 md:space-y-1 ">
                <h1 className="font-bold md:text-left text-center">Reach me on:</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a target="blank" href="https://www.facebook.com/manu0519/">
                      <FaFacebook id="facebook" data-aos="fade-right" data-aos-delay="300" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://www.linkedin.com/in/manu0519/">
                      <FaLinkedin id="linkedin" data-aos="fade-right" data-aos-delay="200" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />{" "}
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://www.instagram.com/manu200694/">
                      <FaSquareInstagram id="insta" data-aos="fade-right" data-aos-delay="100" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://wa.me/9779812055778?text=I%20visited%20your%20website%20and%20looking%20to%20get%20connected">
                      <FaSquareWhatsapp id="whatsapp" data-aos="fade-right" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" gap-y-2 space-y-2 md:space-y-1">
                <h1 className="font-bold md:text-left text-center">Currelntly Involved:</h1>
                <ul className="flex space-x-5">
                  <li>
                    <FaNodeJs data-aos="fade-right" data-aos-delay="300" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                  </li>
                  <li>
                    <IoLogoReact data-aos="fade-right" data-aos-delay="200" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                  </li>
                  <li>
                    <SiMongodb data-aos="fade-right" data-aos-delay="100" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                  </li>
                  <li>
                    <SiExpress data-aos="fade-right" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div data-aos="zoom-out-left" data-aos-duration="1000" className="md:w-1/2 md:ml-48 mt-10 md:mt-16 order-1 md:order-2 ">
            <div className="  ">
              <img loading="lazy" className="object-cover rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px]" src={img4}></img>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br></br>
      <hr />
    </>
  );
};

export default Home_banner;
