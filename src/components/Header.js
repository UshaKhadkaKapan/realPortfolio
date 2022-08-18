import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="header">
      {showHeader ? (
        <AiOutlineClose
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className=" menu-icon position-fixed top-0 end-0"
        />
      ) : (
        <RiMenu3Line
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className=" menu-icon position-fixed top-0 end-0"
        />
      )}
    </div>
  );
};

export default Header;
