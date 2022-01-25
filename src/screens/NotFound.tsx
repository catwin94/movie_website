import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/notFound.scss";

export default function NotFound() {
  return (
    <section className="errorContainer">
      <div className="errorMessage">
        <p className="errorMessage--number">404</p>
        <p>Ooops, This page Not Found! </p>
        <Link to="/">
          Return to <span>Home</span>
        </Link>
      </div>
    </section>
  );
}
