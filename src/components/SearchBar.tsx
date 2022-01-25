import React from "react";
import { useSelector } from "react-redux";
import "../assets/styles/searchBar.scss";
import {
  setError,
  setMovies,
  setTitle,
  sumbitSearch,
} from "../redux/slices/movies.slice";
import { RootState, useAppDispatch } from "../redux/store/store";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const { title, type } = useSelector((state: RootState) => state.movieReducer);

  /* handleEnterKeyPressed: this function detects when a search event is required by the enter key*/
  const handleEnterKeyPressed = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      searchMovie();
    }
  };

  /* handleSearchInput: This function handle the changes in the search input*/
  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(setTitle(event.target.value));
  }

  /* SearMovie: This function searchs in the API by title*/
  function searchMovie(): void {
    if (title) {
      sumbitSearch(title, type || "")
        .then((data) => {
          if (data.Response === "False") {
            dispatch(setError(true));
          } else {
            dispatch(setError(false));
            dispatch(setMovies(data.Search));
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
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
      <i className="bx bx-search-alt" onClick={() => searchMovie()} />
    </div>
  );
}
