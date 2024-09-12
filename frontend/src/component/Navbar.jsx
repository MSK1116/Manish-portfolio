import React, { useEffect, useState } from "react";

import img2 from "../../public/JPG_manish_circle.png";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = ({ sectionRef }) => {
  const [sticky, setSticky] = useState(false);

  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const navList = (
    <>
      <li className="hover:scale-105  transition-all duration-200  cursor-pointer">
        <Link to="Home" smooth={true} duration={500} offset={-70} activeClass="active">
          Home
        </Link>
      </li>
      <li className="hover:scale-105  transition-all duration-200 cursor-pointer">
        <Link to="About" smooth={true} duration={500} offset={-70} activeClass="active">
          About
        </Link>
      </li>
      <li className="hover:scale-105  transition-all duration-200 cursor-pointer">
        <Link to="award" smooth={true} duration={500} offset={-70} activeClass="active">
          Particiaption
        </Link>
      </li>
      <li className="hover:scale-105  transition-all duration-200 cursor-pointer">
        <Link to="contact" smooth={true} duration={500} offset={-70} activeClass="active">
          Contact
        </Link>
      </li>
      <li className="hover:scale-105  transition-all duration-200 cursor-pointer">
        <Link to="project" smooth={true} duration={500} offset={-70} activeClass="active">
          Wall
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className={`max-w-screen-2xl w-screen rounded-sm container px-4 md:px-20 h-16 shadow-lg fixed top-0 left-0 right-0 z-50 ${sticky ? " bg-slate-200" : ""} `}>
        <div className=" flex justify-between items-center h-16 ">
          <div className="flex space-x-2">
            <img src={img2} className=" w-12 h-12 rounded-full object-cover"></img>
            <h1>
              Manis<span className=" text-red-700">h</span>
              <p className="text-sm">Web Portfolio</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex flex-row gap-x-8">{navList}</ul>
            <div className="md:hidden" onClick={() => setMenu(!menu)}>
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile */}
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col items-center justify-center  font-semibold text-xl  h-screen  gap-y-6">{navList}</ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
