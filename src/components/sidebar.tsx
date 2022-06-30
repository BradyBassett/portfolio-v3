import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { socialIcons } from "../common/data";
import { ISidebarData } from "../common/interfaces";

const Sidebar = () => {
  const data: ISidebarData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  const { email } = data.site.siteMetadata;

  return (
    <div className="hidden text-lg text-gray-500 lg:block xl:text-xl">
      <div className="fixed left-[2%] bottom-0 z-10 flex-row">
        <ul className="pb-5">
          {socialIcons.map((social, index) => {
            const { icon, url } = social;
            return (
              <li
                className="mt-10 transition-all duration-200 ease-out hover:translate-x-1 hover:text-green-500"
                key={index}
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="ml-[50%] mt-5 h-32 w-px bg-gray-500"></div>
      </div>
      <div className="fixed right-[2%] bottom-0 z-10">
        <a
          href={`mailto:${email}`}
          className="vertical-rl transition-colors hover:text-green-500 hover:duration-200 hover:ease-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          {email}
        </a>
        <div className="ml-[50%] mt-5 h-32 w-px bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Sidebar;
