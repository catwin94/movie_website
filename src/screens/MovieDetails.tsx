import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  let urlParams = useParams();
  console.log(urlParams);
  return <div>Hello world</div>;
}
