import React from "react";
import "../assets/styles/searchBar.scss";
import { TitleProps } from "../interfaces/interfaces";
import { setMovies } from "../redux/slices/movies.slice";
import { useAppDispatch } from "../redux/store/store";

export default function SearchBar(props: TitleProps) {
  const { title, setTitle } = props;
  const dispatch = useAppDispatch();

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
        dispatch(setMovies(data.Search));
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
      <i className="bx bx-search-alt" onClick={() => searchMovie(title)} />
    </div>
  );
}
