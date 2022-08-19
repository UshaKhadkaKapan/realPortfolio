import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaHtml5,
  FaNodeJs,
  FaDocker,
  FaJsSquare,
} from "react-icons/fa";

const Casorel = () => {
  return (
    <div>
      <div className="carosel-parent position-relative">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          Technologies I Use
        </h1>
        <div className="gallery">
          <span>
            <FaReact color="red" />
          </span>
          <span>
            <FaJsSquare color="yellow" />
          </span>
          <span>
            <FaCss3Alt color="green" />
          </span>
          <span>
            <FaDocker color="white" />
          </span>
          <span>
            <FaBootstrap color="blue" />
          </span>
          <span>
            <FaNodeJs color="purple" />
          </span>
          <span>
            <FaHtml5 color="cyan" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Casorel;
