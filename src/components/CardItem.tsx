import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/cardContainer.scss";
import { CardItemProps } from "../interfaces/interfaces";

export default function CardItem(props: CardItemProps) {
  const { title, description, imdbID, year, imgLink } = props;

  return (
    <Link to={`/movies/${imdbID}`}>
      <div className="cardItem">
        <img className="cardImg" src={imgLink} alt="" />
        <div className="cardDetails">
          <p className="cardTitle">{title}</p>

          <p className="cardDescription">
            {year} - {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
