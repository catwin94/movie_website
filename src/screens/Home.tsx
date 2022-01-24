import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import SearchBar from "../components/SearchBar";
import "../assets/styles/home.scss";
import "../assets/styles/header.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export default function Home() {
  const [title, setTitle] = useState<string>("");

  const movie = useSelector((state: RootState) => state.movieReducer.movies);

  return (
    <React.Fragment>
      <Header />
      <section className="homeContainer">
        <div className="searchBarContainer">
          <SearchBar title={title} setTitle={setTitle} />
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
