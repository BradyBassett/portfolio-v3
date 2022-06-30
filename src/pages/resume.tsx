import React from "react";
import Layout from "../components/layout";

const Resume = () => {
  return (
    <Layout>
      <object
        className="mx-auto h-[1400px] w-1/2 py-40"
        data="../../resume.pdf"
      >
        Brady Bassett Resume
      </object>
    </Layout>
  );
};

export default Resume;
