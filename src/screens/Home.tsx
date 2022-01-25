import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import SearchBar from "../components/SearchBar";
import "../assets/styles/home.scss";
import "../assets/styles/header.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import Filter from "../components/Filter";

export default function Home() {
  const { movies, error } = useSelector(
    (state: RootState) => state.movieReducer
  );
  const [showFilters, setShowFilters] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <section className="homeContainer">
        <div className="searchBarContainer">
          <SearchBar />
          <button
            className="filterButton"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="bx bxs-filter-alt" />
          </button>
        </div>
        {showFilters && (
          <div className="filterContainer">
            <Filter />
          </div>
        )}
        {!error && movies?.length > 0 ? (
          <div className="sectionTitle">
            <h2>Results</h2>
            <span></span>
          </div>
        ) : (
          !error && (
            <div className="welcome">
              <h2>What do you want to see today?</h2>
            </div>
          )
        )}
        {!error ? (
          <CardContainer movieList={movies} />
        ) : (
          <div className="noResults">
            <h2>No results found</h2>
          </div>
        )}
      </section>
      <Footer />
    </React.Fragment>
  );
}
