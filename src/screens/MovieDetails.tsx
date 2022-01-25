import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/styles/movieDetails.scss";
import { MovieDetailsTypes } from "../interfaces/interfaces";
import { searchById } from "../redux/slices/movies.slice";

export default function MovieDetails() {
  let urlParams = useParams();

  const [movieDetails, setMovieDetails] = useState<MovieDetailsTypes | null>(
    null
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    if (urlParams?.imdbID) {
      searchById(urlParams?.imdbID)
        .then((res) => {
          if (res?.Response === "False") {
            setError(true);
          }
          setMovieDetails(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return !movieDetails ? (
    <div className="loading">
      <h2>Loading...</h2>
    </div>
  ) : error ? (
    <div className="error">
      <h2>No results found</h2>
    </div>
  ) : (
    <div className="movieDetailsContainer">
      <img className="movieImg" src={movieDetails.Poster} alt="movie poster" />

      <div className="movieDetailsInfo">
        <h2>{movieDetails.Title}</h2>
        <p>{movieDetails.Year}</p>
        <p>{movieDetails.Title}</p>
      </div>
      <Link to="/"> Home </Link>
    </div>
  );
}
