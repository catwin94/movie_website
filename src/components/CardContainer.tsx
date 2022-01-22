import React from "react";
import CardItem from "./CardItem";
import "../assets/styles/cardContainer.scss";

interface MovieList {
  movieList: movie[];
}

interface movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export default function CardContainer(props: MovieList) {
  const { movieList } = props;

  // movieList.forEach((item) => {
  //   console.log(item.Title);
  // });

  return (
    <div className="cardContainer">
      {movieList.map((item) => (
        <CardItem
          title={item.Title}
          description="HOLA"
          year="1994"
          imgLink={item.Poster}
        />
      ))}
    </div>
  );
}
