import React from "react";
import searchIconOrange from "../assets/icons/search_icon_orange.png";
import { SearchBarProps } from "./interfaces";

export default function SearchBar(props: SearchBarProps) {
  const { title, setTitle, setMovie } = props;

  /* handleEnterKeyPressed: this function detects when a search event is required by the enter key*/
  const handleEnterKeyPressed = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      searchMovie(title);
    }
  };

  /* handleSearchInput: This function handle the changes in the search input*/
  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
  }

  /* SearMovie: This function searchs in the API by title*/
  function searchMovie(movieTitle: string): void {
    const url: string = `http://www.omdbapi.com/?s=${title}&apikey=ae109d42`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.Search);
      });
  }

  return (
    <div>
      <input
        className="searchInput"
        type="text"
        placeholder="Search..."
        onChange={handleSearchInput}
        onKeyPress={handleEnterKeyPressed}
        value={title}
      />
      <img
        src={searchIconOrange}
        alt="search icon"
        onClick={() => searchMovie(title)}
      />
    </div>
  );
}
