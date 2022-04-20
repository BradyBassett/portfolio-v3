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
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brady Bassett Portfolio`,
        short_name: `Brady Bassett`,
        start_url: `/`,
        background_color: `#1e293b`,
        theme_color: `#22c55e`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
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
