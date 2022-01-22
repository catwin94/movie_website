import React from "react";
import "../assets/styles/cardContainer.scss";

export default function CardItem() {
  return (
    <div className="cardItem">
      <img
        className="cardImg"
        src="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="cardDetails">
        <p className="cardTitle">Title</p>
        <p className="cardDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel
          pariatur ut animi impedit in nihil commodi aut facere
        </p>
      </div>
    </div>
  );
}
