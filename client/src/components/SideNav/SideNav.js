import React from "react";
import "./sideNav.css";
import homeImg from "./images/home1.png";
import addImg from "./images/more.png";
import listImg from "./images/list.png";
function SideNav() {
  return (
    <div className="side-nav">
      <div className="nav-btn">
        <img src={homeImg} alt="home" className="side-nav-img" />
      </div>
      <div className="nav-btn">
        <img src={addImg} alt="home" className="side-nav-img" />
      </div>
      <div className="nav-btn selected">
        <img src={listImg} alt="home" className="side-nav-img" />
      </div>
    </div>
  );
}

export default SideNav;
