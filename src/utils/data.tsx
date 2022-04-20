import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export const navLinks: { id: string; text: string }[] = [
  {
    id: "aboutMe",
    text: "About Me",
  },
  {
    id: "projects",
    text: "Projects",
  },
  {
    id: "work",
    text: "Work",
  },
  {
    id: "contactMe",
    text: "Contact Me",
  },
];

export const socialIcons: { icon: JSX.Element; url: string }[] = [
  {
    icon: <FaGithub />,
    url: "https://github.com/BradyBassett",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/brady-bassett-056453173/",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/BradyBassett",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/bradydbassett/",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/bradydbassett",
  },
];
