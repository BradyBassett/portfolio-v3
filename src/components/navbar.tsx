import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { navLinks } from "../utils/data";

const Navbar = () => {
  return (
    <nav className="fixed z-10 h-20 w-full bg-black">
      <a href="/" className="absolute top-1/2 left-4 -translate-y-1/2">
        <StaticImage
          src="../images/logo.png"
          alt="logo image"
          placeholder="blurred"
          width={60}
        />
      </a>
    </nav>
  );
};

export default Navbar;
