import React from "react";
import type { PageProps } from "gatsby";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";

export interface ILayoutProps {
  children: React.ReactNode;
}

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
