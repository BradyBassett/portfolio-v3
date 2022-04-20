import type { GatsbyConfig } from "gatsby";
import path from "path";
import { getMaxListeners } from "process";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Brady Bassett",
    description: "Brady Bassett is a ...",
    siteUrl: "https://bradybassett.com",
    email: "bradydbassett@gmail.com",
    socials: {
      github: "https://github.com/BradyBassett",
      linkedin: "https://www.linkedin.com/in/brady-bassett-056453173/",
      twitter: "https://twitter.com/BradyBassett",
      instagram: "https://www.instagram.com/bradydbassett/",
      facebook: "https://www.facebook.com/bradydbassett",
    },
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/images`),
      },
    },
  ],
};

export default config;
