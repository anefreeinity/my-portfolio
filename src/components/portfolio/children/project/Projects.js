import { useState } from "react";
import appleProject from "../../../../assets/img/portfolio-apple.jpeg";
import { PORTFOLIO_DATA } from "../../../../data/Data";
import ProjectDetail from "./ProjectDetails";

export default function Project() {
  const [open, setOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState({});

  const projects = PORTFOLIO_DATA.projects.map((project, index) => (
    <a
      key={index}
      href="#"
      className="mx-auto transform transition-all hover:scale-105 md:mx-0"
      onClick={(e) => {
        e.preventDefault();
        setProjectDetails({ ...project });
        setOpen(true);
      }}
    >
      <img src={project.photo} className="w-full shadow" alt="drive image" />
    </a>
  ));
  return (
    <div className="container py-16 md:py-20" id="projects">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Projects
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done in the past
      </h3>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {projects}
        <ProjectDetail open={open} setOpen={setOpen} {...projectDetails} />
      </div>
    </div>
  );
}
