"use client";
import React from "react";
import { pricingPlans } from "./constraints";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative w-full bg-neutral-900 py-20 px-6 lg:px-16 overflow-hidden"
    >
      {/* Decorative Dots Background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

      {/* Heading */}
      <div className="relative text-center max-w-2xl mx-auto mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-raleway text-white mb-4">
          Affordable Pricing
        </h2>
        <p className="text-gray-300 text-lg">
          At <span className="font-semibold text-white">TPA-Infera</span>, we believe in
          delivering <span className="font-semibold text-white">premium quality</span> at
          <span className="font-semibold text-white"> reasonable rates</span>.  
          Contact us to get the exact pricing for your project.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative grid gap-10 md:grid-cols-3 max-w-6xl mx-auto z-10">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-zinc-900 rounded-2xl shadow-lg border border-gray-800 p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Title */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {plan.title}
              </h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="mt-auto inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300"
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>

      {/* Bottom Contact Note */}
      <div className="relative text-center mt-16 z-10">
        <p className="text-lg text-gray-300">
          Prices vary depending on project complexity.  
          <span className="font-semibold text-white"> Get in touch to know your price!</span>
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Contact Us →
        </a>
      </div>
    </section>
  );
};

export default Pricing;
