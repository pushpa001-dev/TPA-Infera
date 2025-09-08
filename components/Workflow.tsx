import React from "react";
import { workflowSteps } from "./constraints";

interface StepsProps {
  id: number;
}
const WorkflowStep = ({ id }: StepsProps) => {
  const selectedSteps_left = workflowSteps.filter(
    (step) => step.number === 1 || step.number === 2
  );
  const selectedSteps_right = workflowSteps.filter(
    (step) => step.number === 3 || step.number === 4
  );
  return (
    <div
      key={id}
      className="w-full h-full flex flex-col items-center justify-center gap-20 py-20"
    >
      {selectedSteps_left.map((step, index) => (
        // eslint-disable-next-line react/jsx-key
        <div
          key={index}
          className="w-full h-full flex flex-row items-center justify-center py-10 xl:py-20"
        >
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-neutral-200 text-8xl sm:text-9xl 2xl:text-[200px] 2xl:text-6xl font-boldonse">
              {step.number}
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-center">
            <h1 className="text-neutral-900 text-3xl sm:text-5xl 2xl:text-6xl font-raleway pb-2 lg:pb-5">
              {step.title}
            </h1>
            <div>
              <p className="text-neutral-500 text-sm sm:text-xl 2xl:text-3xl font-sans">
                {step.content1}
              </p>
              <p className="text-neutral-500 text-sm sm:text-xl 2xl:text-3xl font-sans">
                {step.content2}
              </p>
              <p className="text-neutral-500 text-sm sm:text-xl 2xl:text-3xl font-sans">
                {step.content3}
              </p>
            </div>
          </div>
        </div>
      ))}

      {selectedSteps_right.map((step, index) => (
        // eslint-disable-next-line react/jsx-key
        <div
          key={index}
          className="w-full h-full flex flex-row items-center justify-center py-10 xl:py-20"
        >
          <div className="w-full h-full flex flex-col items-end justify-center">
            <h1 className="text-neutral-900 text-3xl sm:text-5xl 2xl:text-6xl font-raleway pb-2 lg:pb-5 text-end">
              {step.title}
            </h1>
            <p className="text-neutral-500 text-sm sm:text-xl 2xl:text-3xl font-sans text-end">
              {step.content1}
            </p>
            <p className="text-neutral-500 text-sm sm:text-xl 2xl:text-3xl font-sans text-end">
              {step.content2}
            </p>
            <p className="text-neutral-500 text-sm sm:text-xl 2xl:text-3xl font-sans text-end">
              {step.content3}
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-neutral-200 text-8xl 2xl:text-[200px] sm:text-9xl 2xl:text-6xl font-boldonse">
              {step.number}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
const Workflow = () => {
  return (
    <section className="  w-full h-full flex flex-col items-center justify-center px-2 lg:px-10 2xl:px-20 py-10 gap-10 lg:py-20">
      <div className="w-full h-full items-center justify-center flex flex-col gap-5 md:gap-10 2xl:gap-20">
        <h1 className="text-neutral-900 text-3xl sm:text-4xl 2xl:text-6xl font-raleway text-center">
          From Idea to Launch
        </h1>
        <p className="text-neutral-500 text-md 2xl:text-3xl font-sans text-center w-full max-w-[1024px]">
          Every project at TPA-Infera follows a structured, step-by-step process
          to ensure smooth communication, pixel-perfect design, and on-time
          delivery. Here&apos;s how we turn your idea into a stunning digital
          experience.
        </p>
      </div>
      <div className=" w-full h-full flex flex-col items-center justify-center gap-10 2xl:gap-20">
        <WorkflowStep id={1} />
      </div>
    </section>
  );
};

export default Workflow;
