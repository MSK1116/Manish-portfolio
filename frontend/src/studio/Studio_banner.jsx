import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/Parallax";

const Studio_banner = () => {
  return (
    <div className="max-w-screen-2xl w-screen overflow-hidden">
      <div className="">
        <Parallax pages={2} style={{ top: "0" }} className=" animation">
          <ParallaxLayer offset={0} speed={0.2}>
            <div className=" bg-[url(/studio/IMG_5547-2.jpg)] bg-cover h-screen bg-no-repeat w-screen " id="background"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-0.7}>
            <div className="  text-8xl text-blue-700  h-screen font-extrabold flex justify-center items-center " id="text">
              <span>STUDIO</span>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.9}>
            <div className="p-8 mt-36 text-2xl text-blue-700 capitalize  h-screen font-extrabold flex justify-center   " id="text">
              <span> Where i click world</span>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default Studio_banner;
