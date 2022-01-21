import React from "react";
import cameraIcon from "../assets/icons/camera_icon.png";
import searchIconWhite from "../assets/icons/search_icon_white.png";
import "../assets/styles/header.scss";
// import Link from "react-router-dom";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="logo">
        <img src={cameraIcon} alt="camera main logo" />
      </div>

      <div className="logoTitle">
        <h1>Movie Fun</h1>
      </div>

      <nav className="link">
        <a href="/"> Directory</a>
      </nav>

      <div className="headerSearchBar">
        <input type="search" placeholder="Search..." />
        <img src={searchIconWhite} alt="search icon" />
      </div>
    </div>
  );
}
