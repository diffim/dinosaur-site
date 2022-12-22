import React from "react";

function Dino(props) {
  return (
    <div className="flex justify-center min-h-screen  overflow-x-hidden flex-col mt-10 items-center  ">
      <p className="text-4xl  border-b-2 mb-20">{props.name}</p>
      <div className="text-xl max-w-screen-lg  [&>p]:mt-7">
        {props.paragraph}
      </div>
      <img
        src={props.src}
        alt=""
        className=" object-cover max-w-screen-lg mt-20"
      />
    </div>
  );
}

export default Dino;
