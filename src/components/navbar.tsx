import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";
import { navLinks, MAXMOBILEWIDTH } from "../common/data";
import BoxButton from "./boxButton";

const Navbar = () => {
  const [burgerToggled, setBurgerToggled] = useState(false);

  const toggleNavbar = () => {
    setBurgerToggled(!burgerToggled);

    if (burgerToggled) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  };

  return (
    <nav
      className={`fixed z-10 w-full bg-black transition-all duration-700 ease-in-out ${
        burgerToggled ? `h-full bg-opacity-50` : `h-20`
      }`}
    >
      <a href="/" className={`absolute left-4 mt-10 -translate-y-1/2`}>
        <StaticImage
          src="../images/logo.png"
          alt="logo image"
          placeholder="blurred"
          width={60}
        />
      </a>
      <button
        onClick={toggleNavbar}
        className={`absolute right-5 mt-10 -translate-y-1/2 lg:hidden`}
      >
        <div
          className={`my-[6px] h-[6px] w-12 bg-gray-400 transition-all duration-1000 ease-out ${
            burgerToggled && `translate-y-3 -rotate-[315deg]`
          }`}
        ></div>
        <div
          className={`my-[6px] h-[6px] w-10 bg-gray-400 transition-all duration-[600ms] ease-out ${
            burgerToggled && `-translate-x-10 opacity-0`
          }`}
        ></div>
        <div
          className={`my-[6px] h-[6px] bg-gray-400 transition-all duration-1000 ease-out ${
            burgerToggled ? `w-12 -translate-y-3 rotate-[315deg]` : `w-8`
          }`}
        ></div>
      </button>
      <ul
        className={`absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-gray-300 transition-transform duration-700 ease-out lg:relative lg:top-1/2 lg:flex lg:-translate-y-1/2 lg:justify-center lg:transition-none ${
          burgerToggled ? `-translate-y-1/2` : `hidden -translate-y-[600px]`
        }`}
      >
        {navLinks.map((link, index) => {
          const { id, text } = link;

          return (
            <li className="py-10 lg:py-0 lg:px-5" key={index}>
              {text}
            </li>
          );
        })}
      </ul>
      <BoxButton
        text="Resume"
        scroll={false}
        navTo="/resume"
        classes="absolute left-3/4 top-1/2 -translate-y-1/2 text-3xl p-1 rounded-lg border-2 border-green-400 text-green-400"
      />
    </nav>
  );
};

export default Navbar;
