import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import CardContainer from "./CardContainer";
import "../assets/styles/home.scss";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <section className="homeContainer">
        {/* <div className="searchBarContainer">
          <input type="search" placeholder="Search..." />
        </div>
        <div className="sectionTitle">
          <h2>Recomendations</h2>
        </div> */}
        <CardContainer />
      </section>
      <Footer />
    </React.Fragment>
  );
}
