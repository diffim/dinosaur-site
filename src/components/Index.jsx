import React from "react";
import { FaGithub } from "react-icons/fa";
import trex from "/trex.png";
function Index() {
  return (
    <div className="w-full min-h-screen overflow-hidden  h-full">
      <div className="">
        <div className="flex flex-col  justify-center items-center ">
          <p className="text-2xl mt-20 to-blue-900">
            AWESOME SITE ABOUYT GUNZ AND DINOSAURS AND MONEY
          </p>
          <img src={trex} alt="trex" className="w-[70%] md:-mt-20" />
        </div>
      </div>
    </div>
  );
}

export default Index;
