import React from "react";
import ProjectCard from "../molecules/ProjectCard";

const projects = [
  {
    title: "Iphone Creator Course Replica",
    description: "A replica from HTMLAwards",
    link: "https://iphone-replica.netlify.app/",
  },
  {
    title: "Replica Company Profile Project",
    description: "A replica of OneKreasi Studio",
    link: "https://replica-onekreasi.netlify.app/",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    link: "#",
  },
];

const ProjectSection = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
