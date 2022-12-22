import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full flex   p-4 border-t-2 md:px-4 text-blue-900 text-xl border-indigo-500/30">
      <div className="md:w-[500px] text-center sm:text-left  italic ">
        This site waz made by the goat kdiffim!
        <br />
        <p>in an attempt to beat his friend at the bestest site ever!!</p>
      </div>
      <div className="font-semibold flex  ml-auto  flex-col text-[20px]">
        <div className="flex  ml-4 items-center">
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
        <div className="flex justify-center items-center">
          <p>Mail:</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ibra.davud@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3"
          >
            <SiGmail size={23} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
