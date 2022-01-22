import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CardContainer from "./CardContainer";
import searchIconOrange from "../assets/icons/search_icon_orange.png";
import "../assets/styles/home.scss";
import "../assets/styles/header.scss";
import CardItem from "./CardItem";

// export interface Results {
//   Search: Object[];
//   totalResults: string;
//   Response: boolean;
// }

export default function Home() {
  // Handle input
  const [title, setTitle] = useState("");

  //Handle result
  const [movie, setMovie] = useState([]);

  function searchMovie(movieTitle: string): void {
    const url: string = `http://www.omdbapi.com/?s=${title}&apikey=ae109d42`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.Search);
      });
  }

  function handleSearchInput(event: any) {
    setTitle(event.target.value);
  }
  const handleEnterKeyPressed = (event: any) => {
    if (event.key === "Enter") {
      searchMovie(title);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <section className="homeContainer">
        <div className="searchBarContainer">
          <div>
            <input
              className="searchInput"
              type="text"
              placeholder="Search..."
              onChange={handleSearchInput}
              onKeyPress={handleEnterKeyPressed}
              value={title}
            />
            <img
              src={searchIconOrange}
              alt="search icon"
              onClick={() => searchMovie(title)}
            />
          </div>
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
