import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { socialIcons } from "../common/data";
import { IFooterData } from "../common/interfaces";

const Footer = () => {
  const data: IFooterData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          socials {
            github
          }
        }
      }
    }
  `);

  const { title, socials } = data.site.siteMetadata;

  return (
    <footer className="absolute left-0 bottom-0 w-full">
      <div className="flex justify-center">
        {socialIcons.map((social, index) => {
          const { icon, url } = social;
          return (
            <a
              href={url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 text-gray-500 transition-all duration-200 ease-out hover:-translate-y-1 hover:text-green-500"
            >
              {icon}
            </a>
          );
        })}
      </div>
      <div className="my-3 flex justify-center">
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-gray-500 hover:animate-pulse"
        >
          <p>Designed and built by&nbsp;</p>
          <p className="text-green-500">{title}</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
