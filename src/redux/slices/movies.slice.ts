import { createSlice } from "@reduxjs/toolkit";

import { API_KEY, BASE_URL } from "../../constants/constants";

export const moviesSlice = createSlice({
  name: "movieReducer",
  initialState: { movies: [], title: "", type: "all", error: false },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setMovies, setTitle, setType, setError } = moviesSlice.actions;

export default moviesSlice.reducer;

export const sumbitSearch = (title: string, type?: string) => {
  const url: string = `${BASE_URL}?s=${title}&apikey=${API_KEY}${
    type !== "all" ? `&type=${type}` : ""
  }`;
  return fetch(url).then((response) => response.json());
};

export const searchById = (movieId: string) => {
  const url: string = `${BASE_URL}?i=${movieId}&apikey=${API_KEY}`;
  return fetch(url).then((response) => response.json());
};
