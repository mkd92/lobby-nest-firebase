import React from "react";
import { Props } from "../utils/types";
import Navbar from "./Navbar";

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
