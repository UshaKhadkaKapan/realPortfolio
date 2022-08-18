import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="header">
      <RiMenu3Line className=" menu-icon position-fixed top-0 end-0" />
    </div>
  );
};

export default Header;
