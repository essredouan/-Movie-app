import React from 'react';
import MovieCard from './Moviecard';
import './App.css'

function MovieList({ movies }) {
  return (
    <div>
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      )}
    </div>
  );
}

export default MovieList;
