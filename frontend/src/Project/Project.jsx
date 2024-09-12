import React from "react";
import projectList1 from "../assets/projects.json";
import ProjectsCard from "../component/ProjectsCard";

const Project = () => {
  const projectList = projectList1.filter((data) => data.id != 2 && data.id < 6);

  return (
    <>
      <div className="max-w-screen-2xl container px-4 md:px-20 my-20">
        <section name="project" className="relative  pt-16 bg-blueGray-50">
          <div className="container mx-auto">
            <div>
              <h1 data-aos="fade-down" className="text-3xl font-semibold text-red-600 lg:text-4xl ">
                See my work
              </h1>
              <div className="mt-2">
                <span data-aos="fade-left" className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span data-aos="fade-left" data-aos-delay="100" className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span data-aos="fade-left" data-aos-delay="300" className="inline-block w-2 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span data-aos="fade-left" data-aos-delay="300" className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 ">
              {projectList.map((projectList) => (
                <ProjectsCard key={projectList.id} items={projectList} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
