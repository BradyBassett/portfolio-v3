import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { ILayoutProps } from "../common/interfaces";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="relative min-h-full">
      <Navbar />
      <Sidebar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
