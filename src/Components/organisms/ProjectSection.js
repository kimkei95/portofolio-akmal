import React from "react";
import ProjectCard from "../molecules/ProjectCard";

const projects = [
  {
    title: "Iphone Creator Course Replica",
    description:
      "Mockup from HTML Awards website, to recreate the website using Next Js and Tailwind css (Personal Project)",
    link: "https://iphone-replica.netlify.app/",
    imageSrc: "/images/replica.png",
  },
  {
    title: "Replica Company Profile Project",
    description:
      "Mockup from a website called onekreasi Studio using Nextjs and TailwindCSS (Personal Project)",
    link: "https://replica-onekreasi.netlify.app/",
    imageSrc: "/images/replica2.png",
  },
  {
    title: "E-commerce SmartBuy (Group Project)",
    description:
      "Create an E-commerce website that run locally, with backend integration using java Springboot (Group Project) ",
    link: "#",
    imageSrc: "/images/smartbuy.png",
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
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
