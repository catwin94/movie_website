import React from "react";
import CardItem from "./CardItem";
import { MovieListProps } from "../interfaces/interfaces";
import "../assets/styles/cardContainer.scss";

export default function CardContainer(props: MovieListProps) {
  const { movieList } = props;

  return (
    <div className="cardContainer">
      {movieList.map((item, key) => (
        <CardItem
          title={item.Title}
          description={item.Type}
          imdbID={item.imdbID}
          year={item.Year}
          imgLink={item.Poster}
          key={key}
        />
      ))}
    </div>
  );
}
