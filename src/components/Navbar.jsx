import React, { useState } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div
      className="flex text-center w-full
    items-center shadow-sm shadow-gray-100 bg-indigo-200
     justify-center p-3  px-8"
    >
      {showNavbar ? (
        <div className="h-screen fixed top-0 z-10 left-0 w-full sm:w-[400px] bg-indigo-200   ">
          <div className="relative h-screen">
            <div className="flex  justify-center h-full items-center -mt-10">
              <ul className="text-blue-900 text-4xl ">
                <div className=" border-b-2  border-b-blue-800/20  cursor-pointer mt-16 ">
                  <Link onClick={() => setShowNavbar(false)} to="/Stegosaurus">
                    Stegosaurus{" "}
                  </Link>
                </div>
                <div className=" border-b-2  border-b-blue-800/20 cursor-pointer mt-16">
                  <Link
                    onClick={() => setShowNavbar(false)}
                    to="/Tyranosaurus rex"
                  >
                    Tyranosaurus rex
                  </Link>
                </div>
                <div className=" border-b-2  border-b-blue-800/20 cursor-pointer mt-16">
                  <Link onClick={() => setShowNavbar(false)} to="/Triceratops">
                    Triceratops{" "}
                  </Link>
                </div>
                <div className=" border-b-2  border-b-blue-800/20 cursor-pointer mt-16">
                  <Link onClick={() => setShowNavbar(false)} to="/Velociraptor">
                    Velociraptor{" "}
                  </Link>
                </div>
                <div className=" border-b-2  border-b-blue-800/20 cursor-pointer mt-16">
                  <Link onClick={() => setShowNavbar(false)} to="/Spinosaurus">
                    Spinosaurus
                  </Link>
                </div>
              </ul>
            </div>
          </div>
          <div
            onClick={() => setShowNavbar(!showNavbar)}
            className="absolute text-3xl cursor-pointer text-white top-10 right-10"
          >
            X
          </div>
        </div>
      ) : (
        <></>
      )}
      <FaBars
        size={20}
        className="mt-1 cursor-pointer "
        onClick={() => setShowNavbar(!showNavbar)}
      />

      <Link to="/" className="text-2xl ml-3  text-blue-900 mr-auto">
        BASED DINOCLAPEDIA
      </Link>
      <FaUserCircle size={22} className="cursor-pointer mt-2" />
    </div>
  );
}

export default Navbar;
