import React from "react";
import "../assets/styles/cardContainer.scss";

interface cardItemProps {
  title: string;
  description: string;
  year: string;
  imgLink: string;
}

export default function CardItem(props: cardItemProps) {
  const { title, description, year, imgLink } = props;

  return (
    <div className="cardItem">
      <img className="cardImg" src={imgLink} alt="" />
      <div className="cardDetails">
        <p className="cardTitle">{title}</p>
        <p>{year}</p>
        <p className="cardDescription">{description}</p>
      </div>
    </div>
  );
}
