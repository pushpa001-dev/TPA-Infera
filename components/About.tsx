import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section id="about" className="w-full h-full px-3 lg:px-20 2xl:px-30 py-10 lg:py-20 bg-neutral-900 flex flex-col sm:flex-row items-center justify-center gap-10">
      <div className="w-full h-full text-white gap-10 flex flex-col">
        <h1 className="text-white text-3xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-start">
          About TPA-Infera
        </h1>
        <p className="text-sm text-center lg:text-start 2xl:text-3xl text-white/80 font-sans">
          We’re a modern landing page development agency dedicated to helping
          brands, startups, and creators establish a strong online presence.
        </p>
        <p className="text-sm text-center lg:text-start 2xl:text-3xl text-white/80 font-sans">
          At TPA-Infera, we combine clean design, powerful animations, and
          responsive development to build conversion-focused landing pages that
          deliver results.
        </p>
        <p className="text-sm text-center lg:text-start 2xl:text-3xl text-white/80 font-sans">
          Our goal is simple: turn your ideas into stunning digital experiences.
        </p>
      </div>
      <div className="w-full flex items-end justify-end relative">
        <Image
          src={"/about_us.png"}
          alt="about"
          width={1000}
          height={1000}
          className="bg-no-repeat bg-cover object-cover rounded-md lg:rounded-2xl xl:rounded-3xl shadow-2xl "
        />
        <div className="absolute left-0 top-10">
          <h1
            className="
    text-white font-boldonse
    text-[15vw] leading-[30vw]        
    sm:text-[10vw] sm:leading-[12vw]  
    md:text-[10vw] md:leading-[15vw]   
    lg:text-[10vw] lg:leading-[10vw]    
    xl:text-[8vw] xl:leading-[12vw]    
    text-start text-shadow-lg/90
  "
          >
            Who <br />
            <span className="text-white/80 block text-[20vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[8vw]">
              We Are
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
