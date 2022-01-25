import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "../screens/Home";
import Layout from "../screens/Layout";
import MovieDetails from "../screens/MovieDetails";
import NotFound from "../screens/NotFound";

//This component handle the routes of the project
function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
