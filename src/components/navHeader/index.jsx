import React from "react";
import './navHeader.css'
import HeaderOptions from "../headerOptions";
import MenuToggle from "../menuToggle";
import Tittle from "../tittle";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <div className="topContain">
      <Link to="/" className="button">
        <Tittle tittle="Healthy Food" />
      </Link>
      <div className="menu-section">
        <MenuToggle />
        <HeaderOptions />
      </div>
    </div>
  );
};

export default NavHeader;