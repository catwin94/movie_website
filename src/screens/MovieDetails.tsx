import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/styles/movieDetails.scss";
import { MovieDetailsTypes, RaitingItem } from "../interfaces/interfaces";
import { searchById } from "../redux/slices/movies.slice";

const detalles = {
  Title: "Batman Begins",
  Year: "2005",
  Rated: "PG-13",
  Released: "15 Jun 2005",
  Runtime: "140 min",
  Genre: "Action, Crime, Drama",
  Director: "Christopher Nolan",
  Writer: "Bob Kane, David S. Goyer, Christopher Nolan",
  Actors: "Christian Bale, Michael Caine, Ken Watanabe",
  Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
  Language: "English, Mandarin",
  Country: "United Kingdom, United States",
  Awards: "Nominated for 1 Oscar. 13 wins & 79 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "8.2/10" },
    { Source: "Rotten Tomatoes", Value: "84%" },
    { Source: "Metacritic", Value: "70/100" },
  ],
  Metascore: "70",
  imdbRating: "8.2",
  imdbVotes: "1,383,989",
  imdbID: "tt0372784",
  Type: "movie",
  DVD: "18 Oct 2005",
  BoxOffice: "$206,852,432",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

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
    <section className="movieDetailes">
      <div className="movieDetailsContainer">
        <img
          className="movieImg"
          src={movieDetails.Poster}
          alt="movie poster"
        />

        <div className="movieDetailsInfo">
          <h2>
            {movieDetails.Title} ({movieDetails.Year})
          </h2>
          <div className="extraDetails">
            <p>{movieDetails.Genre}</p>
            <p>Director: {movieDetails.Director}</p>
            <p>Actors: {movieDetails.Actors}</p>
          </div>

          <p className="plot">Plot: {movieDetails.Plot}</p>

          <h3>Raitings:</h3>
          <div className="raiting">
            {movieDetails.Ratings.map((item: RaitingItem) => (
              <p>
                {item.Source}: {item.Value}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Link className="buttonBackHome" to="/">
        Go back!
      </Link>
    </section>
  );
}
