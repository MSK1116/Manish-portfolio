import React, { useEffect } from "react";
import Svg_computer_scientist from "../SVG/Svg_computer_scientist";
import { IoSchoolSharp } from "react-icons/io5";
import Aos from "aos";
import { MdWork } from "react-icons/md";
import Award from "./Award";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div name="About" className="max-w-screen-2xl container px-4 md:px-20 my-20">
        <section className="">
          <div className="container px-6 py-10 mx-auto">
            <div className="lg:flex lg:items-center">
              <div className="w-full space-y-12 lg:w-1/2 ">
                <div>
                  <h1 data-aos="fade-down" className="text-3xl font-semibold text-red-600 capitalize lg:text-4xl ">
                    About me !
                  </h1>
                  <div className="mt-2">
                    <span data-aos="fade-left" className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                    <span data-aos="fade-left" data-aos-delay="100" className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                    <span data-aos="fade-left" data-aos-delay="300" className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                  </div>
                </div>

                <div data-aos="fade-up-right" data-aos-duration="1000" className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
                    <IoSchoolSharp className="w-6 h-6" />
                  </span>

                  <div className="mt-4 md:mx-4 space-y-2 md:mt-0">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Education</h1>
                    <ul className="flex flex-col mr-4">
                      <div className=" space-y-4 ">
                        <p className="">
                          +2 Science: School Leaving Certificate (SLC) <br></br> GPA:- 11th: 3.73 & 12th: 3.65 <br></br> National Examination Board (NEB), 2080BS <br></br>Capital College & Research Center (CCRC)-Balkumari, KTM
                        </p>
                        <hr></hr>
                        <p>
                          10 th :Secondary Education Examination (SEE)<br></br> GPA: 3.55<br></br> Gamvir Samudra Setu Secondary School- Imadol, Lalitpur
                        </p>
                        <hr></hr>
                        <p>
                          8 th : Basic Level Examination (BLE) <br></br> GPA: 3.24 <br></br> Gamvir Samudra Setu Secondary School- Imadol, Lalitpur
                        </p>
                      </div>
                    </ul>
                  </div>
                </div>

                <div data-aos="fade-up-right" data-aos-duration="1000" className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
                    <MdWork className="w-6 h-6" />
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0 space-y-2">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Experience</h1>
                    <div className="space-y-4">
                      <p>
                        Research & Devlopment Head<br></br> The Scientific Circle-CCRC, Kathmnadu
                      </p>
                      <hr></hr>
                      <p>
                        Founder & Developer <br></br> Mold Skill (web)
                      </p>
                      <hr></hr>
                      <p>
                        Founding Director <br></br> Everest TechSo Network (ETN)
                      </p>
                      <hr></hr>
                      <p>
                        Website Devloper at <br></br> Gamvir Samudra Setu Secondary School- Imadol, Lalitpur{" "}
                      </p>
                      <hr></hr>
                      <p>
                        Chief Committee Head <br></br> Think Big - Dhanusha, Nepal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in-up" data-aos-duration="2000" className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                <Svg_computer_scientist />
              </div>
            </div>
          </div>
        </section>
        <Award />
      </div>
    </>
  );
};

export default About;
