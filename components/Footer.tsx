"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { footerLinks } from "./constraints";
import { useSmoothScroll } from "./ScrollContext";


const Footer = () => {
  const lenis = useSmoothScroll();
  return (
    <footer className="bg-black text-white py-10 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold tracking-wide">
            TPA<span className="text-gray-400">-Infera</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            Crafting responsive, interactive, and conversion-focused landing
            pages to elevate your online presence.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-gray-300 text-sm">
          {footerLinks.map((link , index) => (
            // eslint-disable-next-line react/jsx-key
            <button key={index} className="hover:text-white transition-all duration-300" onClick={() => {
              const target = document.querySelector(link.target) as HTMLElement; ;
              if (target && lenis) {
                lenis.scrollTo(target);
              }
            }}>
            {link.label}
          </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://www.instagram.com/tpa_infera_049/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/pushpa001-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@TPA-Infera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">TPA-Infera</span>
      </div>
    </footer>
  );
};

export default Footer;
