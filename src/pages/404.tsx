import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Layout>
      <div>404, page not found</div>
      <Link to="/">Return to Home Page</Link>
    </Layout>
  );
};

export default NotFound;
