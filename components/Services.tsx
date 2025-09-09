import React from "react";
import Image from "next/image";
import { services } from "./constraints";
interface CardProps {
  title: string;
  icons: string;
  content: string;
}
const Card = ({ title, icons, content }: CardProps) => {
  return (
    <div  className="w-full h-full flex flex-col items-center justify-center gap-5 2xl:gap-10 shadow-lg/20 p-3 2xl:px-10 rounded-lg hover:scale-102 transition-all duration-400">
      <div className="bg-black p-3 lg:p-5 rounded-full">
        <Image
          src={icons}
          alt={title}
          width={100}
          height={100}
          className="w-5 h-5 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 "
          priority
        />
      </div>
      <h1 className="text-neutral-900 text-xl sm:text-xl text-center lg:text-2xl 2xl:text-3xl font-sans">
        {title}
      </h1>
      <p className="text-neutral-500 text-[12px] 2xl:text-lg font-sans text-center">
        {content}
      </p>
    </div>
  );
};
const Services = () => {
  return (
    <section id="services" className="w-full h-full flex flex-col items-center justify-center py-10 lg:py-20 px-5">
      <h1 className="text-neutral-900 text-3xl sm:text-4xl 2xl:text-6xl font-raleway  text-center">
        Our Services
      </h1>

      <div className="w-full h-full py-10 xl:py-20 2xl:px-50 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 2xl:gap-20">
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            icons={service.icon}
            content={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
