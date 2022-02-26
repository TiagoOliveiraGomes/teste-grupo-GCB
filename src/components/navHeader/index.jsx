import React from "react";
import HeaderOptions from "../headerOptions";
import MenuToggle from "../menuToggle";
import Tittle from "../tittle";

const NavHeader = () => {
  return (
    <div className="topContain">
      <Tittle tittle="Healthy Food" />
      <div className="menu-section">
        <MenuToggle />
        <HeaderOptions />
      </div>
    </div>
  );
};

export default NavHeader;