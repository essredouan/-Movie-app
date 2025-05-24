import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="movie-img" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description.slice(0, 80)}...</p>
        <p>⭐ {movie.rating} / 5</p>
        <Link to={`/movies/${movie.title}`} className="details-link">
          View Details ▶
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
