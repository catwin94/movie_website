import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import CardContainer from "./CardContainer";
import searchIconOrange from "../assets/icons/search_icon_orange.png";
import "../assets/styles/home.scss";
import "../assets/styles/header.scss";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <section className="homeContainer">
        <div className="searchBarContainer">
          <div>
            <input
              className="searchInput"
              type="search"
              placeholder="Search..."
            />
            <img src={searchIconOrange} alt="search icon" />
          </div>
        </div>
        <div className="sectionTitle">
          <h2>Recomendations</h2>
          <span></span>
        </div>
        <CardContainer />
      </section>
      <Footer />
    </React.Fragment>
  );
}
