import React from "react";
import Navbar from "../components/Navbar/Navbar";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PageWrapper;
