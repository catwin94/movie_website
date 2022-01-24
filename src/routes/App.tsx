import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import MovieDetails from "../screens/MovieDetails";

//This component handle the routes of the project
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/" element={<Home />}>
          {/* <Link to=`/movies/${variable}` ></Link> */}
        </Route>
        <Route path="/movies/:imdbID" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
