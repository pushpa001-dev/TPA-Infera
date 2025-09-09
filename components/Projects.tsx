import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./constraints";
interface CardProps {
  title: string;
  discription: string;
  image: string;
  link: string;
}
const Card = ({ title, discription, image, link }: CardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="relative w-full h-full flex flex-col items-center justify-center shadow-white/30 shadow-lg/90 bg-white  rounded-lg overflow-hidden active:scale-95 hover:scale-101 not-only:transition-all duration-500 xl:rounded-2xl group  border-none"
    >
      <div className="w-full h-full relative">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-t-lg xl:rounded-t-2xl overflow-hidden group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className=" relative w-full h-full flex flex-col items-start justify-center px-5 py-3 2xl:px-10 2xl:py-10 gap-2 ">
        <h1 className="text-neutral-600 text-sm sm:text-2xl 2xl:text-3xl font-medium text-start">
          {title}
        </h1>
        <p className="text-neutral-500 text-[10px] sm:text-md xl:text-lg 2xl:text-lg font-sans text-start">
          {discription}
        </p>
      </div>
      <div className=" hidden 2xl:flex w-full h-full absolute right-0 bottom-0 bg-neutral-900/20 opacity-100 group-hover:opacity-0 group-hover:h-0 transition-all duration-500" />
    </Link>
  );
};
const Projects = () => {
  return (
    <section id="projects" className="relative flex flex-col items-center justify-center w-full h-full px-3 lg:px-20 2xl:px-30 py-10 lg:py-20  gap-10 xl:gap-20">
      <h1 className="text-white text-3xl lg:text-5xl xl:text-6xl font-raleway text-center">
        {" "}
        See Our Work{" "}
      </h1>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-20">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            discription={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
      <div className=" flex absolute w-full h-full bg-neutral-900 z-[-20]" />
      <div className="w-full h-full flex items-center justify-center absolute z-[-1] opacity-2">
        <Image
          src={"/projects_bg.png"}
          alt="projects"
          fill
          className="bg-cover"
        />
      </div>
    </section>
  );
};

export default Projects;
