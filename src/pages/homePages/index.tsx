import Footer from "common/Footer";
import Header from "common/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const IndexHomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default IndexHomePage;
