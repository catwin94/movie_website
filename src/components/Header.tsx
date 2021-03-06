import React from "react";
import { Link } from "react-router-dom";
import cameraIcon from "../assets/icons/camera_icon.png";
import "../assets/styles/header.scss";
// import Link from "react-router-dom";

export default function Header() {
  return (
    <Link to="/">
      <div className="headerContainer">
        <div className="logo">
          <img src={cameraIcon} alt="camera main logo" />
        </div>

        <div className="logoTitle">
          <h1>Movie Fun</h1>
        </div>
      </div>
    </Link>
  );
}
