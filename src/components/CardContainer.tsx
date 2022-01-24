import React from "react";
import CardItem from "./CardItem";
import { MovieListProps } from "./interfaces";
import "../assets/styles/cardContainer.scss";

export default function CardContainer(props: MovieListProps) {
  const { movieList } = props;

  return (
    <div className="cardContainer">
      {movieList.map((item) => (
        <CardItem
          title={item.Title}
          description={item.Type}
          year={item.Year}
          imgLink={item.Poster}
        />
      ))}
    </div>
  );
}
