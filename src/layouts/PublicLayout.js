import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className=" px-3 2xl:px-10  py-5">{children}</div>
      <Footer />
    </>
  );
}
