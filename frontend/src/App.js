import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  const location = useLocation();
  AOS.init();
  return (
    <>
      {location.pathname.includes("admin") ? (
        <>         
            <Outlet />
        </>
      ) : (
        <>
          {(location.pathname === "/login") ^
          (location.pathname === "/signup") ? (
            <Outlet />
          ) : (
            <>
              <Header />
                 <Outlet />
              <Footer />
            </>
          )}
        </>
      )}

      <ToastContainer />
    </>
  );
};

export default App;
