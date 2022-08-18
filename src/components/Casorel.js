import React from "react";
import { FaReact } from "react-icons/fa";

const Casorel = () => {
  return (
    <div>
      <div className="carosel-parent position-relative">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          Technologies I Use
        </h1>
        <div className="gallery">
          <span>
            <FaReact />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Casorel;
