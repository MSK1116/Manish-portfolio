import React, { useEffect } from "react";
import { FaGithubAlt, FaHandHoldingHeart } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import "animate.css";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

const Footer = () => {
  return (
    <>
      <footer data-aos="fade-up" className=" max-w-screen-2xl  bg-gray-100">
        <div data-aos="fade-up" data-aos-duration="1000" className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <Link to="Home" duration={900} offset={-70} activeClass="active" smooth={true}>
              <div data-aos="zoom-in-down" data-aos-duration="2000" className="inline-block rounded-full  bg-teal-600 hover:bg-red-600 transition-all duration-700 p-2 text-white shadow  sm:p-3 lg:p-4" href="#MainContent">
                <span className="sr-only">Back to top</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div data-aos="zoom-in" data-aos-duration="1500" className="flex justify-center   text-teal-600 lg:justify-start">
                <FaHandHoldingHeart className=" size-28" />
              </div>
              {/* <ReactTyped className=" text-blue-800 font-bold" strings={["Student.", "Devloper.", "Social Activist.", "Photographer."]} typeSpeed={40} backSpeed={50} loop={true} /> */}
              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                <ReactTyped strings={["Society is a partnership in all science; a partnership in all art; a partnership in every virtue, and in all perfection."]} typeSpeed={40} backSpeed={50} />
                <br></br> <span className="text-right"> – Edmund Burke</span>
              </p>
            </div>
            <div>
              <p data-aos="fade-up" className="text-sm mt-12 text-gray-500">
                My Creation:
              </p>
              <ul className="md:mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                <li data-aos="fade-up" data-aos-delay="100">
                  <a target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://evtechso.com/">
                    Everest TechSo Network
                  </a>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <a target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://thinkbig.org.np/">
                    Think Big
                  </a>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <a target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://www.msmahato.com.np">
                    Mold Skill
                  </a>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <a target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://lens.manishmahato.info.np">
                    Focus Nest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex mt-10 justify-center  md:justify-end">
            <div className="text-sm text-gray-500 lg:text-right">Made with React, Get code on:</div>
            <a target="blank" href="https://github.com/MSK1116/Manish-portfolio/">
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
