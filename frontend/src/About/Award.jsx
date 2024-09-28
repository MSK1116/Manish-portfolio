import React, { useEffect } from "react";
import { GiPodiumSecond } from "react-icons/gi";
import { FaHandsBubbles } from "react-icons/fa6";
import Svg_Award from "../SVG/Svg_Award";
import { FaMicrophoneAlt } from "react-icons/fa";

const Award = () => {
  return (
    <>
      <section name="award" className="relative pt-16 bg-blueGray-50">
        <div className="container mx-auto">
          <div>
            <h1 data-aos="fade-down" className="text-3xl font-semibold text-red-600 capitalize lg:text-4xl ">
              Awards & Participation
            </h1>
            <div className="mt-2">
              <span data-aos="fade-left" className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
              <span data-aos="fade-left" data-aos-delay="100" className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
              <span data-aos="fade-left" data-aos-delay="300" className="inline-block w-2 h-1 ml-1 rounded-full bg-blue-500"></span>
              <span data-aos="fade-left" data-aos-delay="300" className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-5 ">
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="w-screen md:w-1/3 px-12 md:px-4 mr-auto ml-auto -mt-78  hover:-translate-x-1 transition-all duration-1000">
              <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ">
                <Svg_Award />
                <blockquote data-aos-delay="700" className="relative p-8 mb-4">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-[95px]  -top-[94px] ">
                    <polygon points="-30,95 583,95 583,65" className=" text-blue-700 fill-current"></polygon>
                  </svg>
                  <h4 data-aos="zoom-in-up" data-aos-offset="-10" className="text-xl font-bold ">
                    Things that keeps me motivated
                  </h4>
                  <p data-aos="zoom-in-up" data-aos-offset="-10" data-aos-duration="1000" className="text-md font-light mt-2 ">
                    My academic journey has been punctuated by remarkable achievements and active participation in prestigious events that showcase my dedication to excellence. <span className=" text-red-600 font-semibold">Some of them are :</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div data-aos="zoom-in-right" className="px-4 py-5 flex-auto rounded-md hover:bg-slate-200 hover:scale-105 transition-all duration-300">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <GiPodiumSecond className="w-6 h-6" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold"> EEPEX-24</h6>
                      <p className="mb-4 text-left">
                        2<sup>nd</sup> position in Project Exhibition at EEPEX 24<br></br> Organized by SEEE , Kathmandu University
                      </p>
                    </div>
                  </div>
                  <div data-aos="zoom-in-right" className="relative flex flex-col min-w-0 rounded-md hover:bg-slate-200 hover:scale-105 transition-all duration-300">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <FaHandsBubbles className="w-6 h-6" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold"> MechTRIX- 2080</h6>
                      <p className="mb-4 ">Participated in MechTRIX-2080 Organized by SOMAES, IOE Pulchowk </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div data-aos="zoom-in-left" aos-data-duration="1000" className="relative flex flex-col min-w-0 mt-4 rounded-md  hover:bg-slate-200 hover:scale-105 transition-all duration-300">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <FaMicrophoneAlt className="w-6 h-6" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">ISA</h6>
                      <p className="mb-4 text-blueGray-500"> Best Speaker of Speech Competition Organized by International School Award (ISA)</p>
                    </div>
                  </div>
                  <div data-aos="zoom-in-left" aos-data-duration="1000" className="relative flex flex-col min-w-0 rounded-md hover:bg-slate-200 hover:scale-105 transition-all duration-300">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <FaHandsBubbles className="w-6 h-6" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold"> MechTRIX- 2079</h6>
                      <p className="mb-4 ">Participated in MechTRIX-2080 Organized by SOMAES, IOE Pulchowk </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
