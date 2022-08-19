import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaHtml5,
  FaNodeJs,
  FaDocker,
  FaJsSquare,
  FaGit,
} from "react-icons/fa";

const Casorel = () => {
  return (
    <div>
      <div className="carosel-parent position-relative">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          Technologies I Use
        </h1>
        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <FaReact color="red" />
          </span>
          <span style={{ "--i": 2 }}>
            <FaJsSquare color="yellow" />
          </span>
          <span style={{ "--i": 3 }}>
            <FaCss3Alt color="green" />
          </span>
          <span style={{ "--i": 4 }}>
            <FaDocker color="pink" />
          </span>
          <span style={{ "--i": 5 }}>
            <FaBootstrap color="blue" />
          </span>
          <span style={{ "--i": 6 }}>
            <FaNodeJs color="purple" />
          </span>
          <span style={{ "--i": 7 }}>
            <FaHtml5 color="brown" />
          </span>
          <span style={{ "--i": 8 }}>
            <FaGit color="cyan" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Casorel;
