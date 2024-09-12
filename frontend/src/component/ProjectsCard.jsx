import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProjectsCard = ({ items }) => {
  // Construct the background image URL
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => window.open(`${items.link}`, "_blank", "noopener,noreferrer")} className="w-full p-6 mx-auto    ">
        <div data-aos="fade-up" data-aos-offset="50" className=" shadow-md hover:shadow-xl rounded bg-white overflow-hidden cursor-pointer">
          <div className="grid grid-cols-2 h-64">
            <div className="h-64 border overflow-hidden">
              <img className="object-cover hover:scale-105 transition-all duration-300 h-64 w-full" src={`/proj/${items.img1}.png`} alt="Image 1" />
            </div>
            <div className="h-64 border overflow-hidden">
              <img className="object-cover hover:scale-105 transition-all duration-300 h-32 w-full" src={`/proj/${items.img2}.png`} alt="Image 2" />
              <img className="object-cover hover:scale-105 transition-all duration-300 h-32 w-full" src={`/proj/${items.img3}.png`} alt="Image 3" />
            </div>
          </div>
          <div className="p-3">
            <div className="flex flex-col cursor-pointer space-y-3 md:flex justify-between">
              <div className="flex flex-row place-content-between">
                <h3 data-aos="fade-up" className="font-medium">
                  {items.title}
                </h3>
                <span data-aos="fade-left" className="text-sm clamp text-gray-500">
                  {items.type}
                </span>
              </div>
              <div>
                <span data-aos="fade-up" data-aos-delay="100" className="text-sm line-clamp-2 md:line-clamp-3 text-gray-500">
                  {items.description}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
      </div>
    </>
  );
};

export default ProjectsCard;
