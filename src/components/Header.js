import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

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

      <ul className={`${showHeader ? "show-header" : "hide-header"} n-box1`}>
        <li>Home</li>
        <li>project</li>
        <li>Courses</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
