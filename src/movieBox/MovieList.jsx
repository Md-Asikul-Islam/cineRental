import React from "react";
import MovieCard from "./MovieCard";
import { getAllMovies } from "../data";

function MovieList() {
  const movies = getAllMovies();
  return (
    <div class="content">
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
