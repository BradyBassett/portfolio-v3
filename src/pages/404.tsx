import { Link } from "gatsby";
import React from "react";
import BoxButton from "../components/boxButton";
import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Layout>
      {/* TODO - make responsive, potentially add some flair */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-gray-400">
        <h1 className="text-[18rem]">404</h1>
        <h2 className="text-[2rem]">Page not Found</h2>
        <div className="mt-20">
          <BoxButton
            text="Return Home"
            scroll={false}
            navTo="/"
            classes="text-3xl p-1 rounded-lg border-2 border-green-400 text-green-400"
          />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
