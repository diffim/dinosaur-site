import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Outlet, useLocation } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  return (
    <div
      className={` ${
        location.pathname === "/" ? "overflow-hidden " : "overflow-y-scroll"
      } h-screen scrollbar`}
    >
      <Navbar />
      <div
        className={` ${
          location.pathname === "/" ? "overflow-hidden " : ""
        } bg-indigo-200 p-12 pb-24    `}
      >
        <Outlet />
      </div>
      {/* <Footer /> */}
      <div
        className={`  ${
          location.pathname === "/" ? "flex " : "hidden"
        } absolute bottom-5 right-5  ml-4 items-center`}
      >
        <p>Github :</p>{" "}
        <a
          href="https://github.com/diffim"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 "
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
}

export default App;
