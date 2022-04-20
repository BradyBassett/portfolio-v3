import React from "react";
import type { PageProps } from "gatsby";
import Footer from "./footer";
import Sidebar from "./sidebar";

export interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="relative min-h-full">
      <div>Navbar</div>
      <Sidebar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
