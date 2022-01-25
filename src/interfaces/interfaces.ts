import { Dispatch, SetStateAction } from "react";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieListProps {
  movieList: Movie[] | [];
}

export interface CardItemProps {
  title: string;
  description: string;
  imdbID: string;
  year: string;
  imgLink: string;
}

export interface TitleProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

export interface MovieDetailsTypes {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
