import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/notFound.scss";

export default function NotFound() {
  return (
    <section className="container error">
      <div className="error__container">
        <p className="error__container--number">404</p>
        <p>Ooops, This page Not Found! </p>
        <Link to="/">
          Return to <span>Home</span>
        </Link>
      </div>
    </section>
  );
}
