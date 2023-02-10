import React from "react";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "80px" }}>{children}</div>
      <Footer />
    </>
  );
}
