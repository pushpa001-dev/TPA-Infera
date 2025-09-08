"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const HeroTitle = () => {
  return (
    <section className="relative h-screen w-full  flex justify-center items-center min-h-screen flex-col lg:flex-row xl:flex-row  overflow-hidden px-10 xl:px-20 py-10 lg:py-20">
      <div className=" w-full h-full items-center justify-center xl:justify-start flex font-raleway">
        {/* Big TPA Text */}
        <h1
          className=" relative flex text-neutral-900  "
          style={{
            fontSize: "20vw",
          }}
        >
          TPA
          <br />
          <span
            style={{ fontSize: "5vw" }}
            className=" absolute text-shadow-lg/20 lg:text-shadow-lg/50 right-0 bottom-[0]"
          >
            Infera
          </span>
        </h1>
      </div>
      <div className="w-full h-full flex flex-col gap-10 sm:gap-20 2xl:gap-40  items-center justify-center   ">
        <div className="items-center justify-center xl:items-end flex flex-col gap-10 lg:gap-20">
          <h1 className=" text-neutral-900 text-3xl sm:text-4xl 2xl:text-6xl font-sans text-center lg:text-end">
            We Build Landing Pages That Convert
          </h1>
          <p className=" text-neutral-500 text-lg 2xl:text-3xl font-sans text-center xl:text-end lg:pl-10">
            With Next.js, GSAP, and Framer Motion, we build fast, <br />{" "}
            responsive, and engaging landing pages that help <br /> you stand
            out from the competition.
          </p>
        </div>
        <div className=" flex gap-5 xl:gap-20 items-center justify-center xl:justify-end flex-col lg:flex-row w-full pb-10 sm:pb-0 ">
          <Button
            text="Contact"
            className=" text-black bg-black font-sans py-2 px-10 lg:px-20 lg:py-4 2xl:py-6 text-xl 2xl:text-4xl w-60 2xl:w-70 cursor-pointer "
          />
          <Button
            text="Portfolio"
            className=" text-black bg-black font-sans py-2 px-10 lg:px-20 lg:py-4 2xl:py-6 text-xl 2xl:text-4xl w-60 2xl:w-70 cursor-pointer "
          />
        </div>
      </div>
      <div className=" w-full items-center justify-center flex absolute bottom-[1%]">
        <p className="text-md lg:text-2xl font-sans animate-bounce">
          ↓ scroll down
        </p>
      </div>
      <div className="w-full h-full absolute top-0 z-[-1] blur-[1px] opacity-3">
        <Image
          src={"/hero_bg.jpg"}
          alt="hero"
          fill
          className="w-full h-full object-cover "
          priority
        />
      </div>
    </section>
  );
};

export default HeroTitle;
