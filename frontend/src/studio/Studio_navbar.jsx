import React, { useEffect, useState } from "react";

import img2 from "/JPG_manish_circle.png";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { Navigate, useNavigate } from "react-router-dom";

const Studio_navbar = ({ sectionRef }) => {
  const navigate = useNavigate();
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
      <li onClick={() => navigate("/home")} className="hover:scale-105  transition-all duration-200  cursor-pointer">
        Portfolio
      </li>
      <li className="hover:scale-105  transition-all duration-200 cursor-pointer">
        <Link to="About">About</Link>
      </li>
      <li className="hover:scale-105  transition-all duration-200 cursor-pointer">
        <Link to="award">Particiaption</Link>
      </li>
      <li className="hover:scale-105  transition-all duration-200 cursor-pointer">
        <Link to="contact">Contact</Link>
      </li>
      <li onClick={() => navigate("/studio")} className="hover:scale-105 text-red-600  transition-all duration-200 cursor-pointer">
        Save
      </li>
    </>
  );

  return (
    <>
      <div className={`max-w-screen-2xl w-screen rounded-sm container px-4 md:px-20 h-16 shadow-lg bg-gray-100/75 fixed top-0 left-0 right-0 z-50 ${sticky ? " bg-slate-200" : ""} `}>
        <div className=" flex justify-between items-center h-16 ">
          <div className="flex space-x-2">
            <img src={img2} className=" w-12 h-12 rounded-full object-cover"></img>
            <h1>
              Manis<span className=" text-red-700">h</span>
              <p className="text-sm">STUDIO</p>
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

export default Studio_navbar;
