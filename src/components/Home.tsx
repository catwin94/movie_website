import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import { Movie } from "./interfaces";
import "../assets/styles/home.scss";
import "../assets/styles/header.scss";

export default function Home() {
  // Handle input
  const [title, setTitle] = useState<string>("");

  //Handle result from API search
  const [movie, setMovie] = useState<Movie[] | []>([]);

  return (
    <React.Fragment>
      <Header />
      <section className="homeContainer">
        <div className="searchBarContainer">
          <SearchBar title={title} setTitle={setTitle} setMovie={setMovie} />
        </div>
        <div className="sectionTitle">
          <h2>Recomendations</h2>
          <span></span>
        </div>
        <CardContainer movieList={movie} />
      </section>
      <Footer />
    </React.Fragment>
  );
}
