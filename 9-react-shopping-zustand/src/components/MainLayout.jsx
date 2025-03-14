import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
// import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer/> */}
      <Toaster toastOptions={{
          className: '',
          duration: 1000,
          removeDelay: 500
        }} />
    </>
  );
};

export default MainLayout;