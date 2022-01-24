import { Dispatch, SetStateAction } from "react";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieList {
  movieList: Movie[];
}

export interface CardItemProps {
  title: string;
  description: string;
  year: string;
  imgLink: string;
}

export interface TitleProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

export interface SearchBarProps extends TitleProps {
  setMovie: Dispatch<SetStateAction<any>>;
}
