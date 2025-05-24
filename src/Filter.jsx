import React from 'react';
import './App.css';

function Filter({ setTitleFilter, setRatingFilter }) {
  return (
    <div className="filter-container">
      <input
        type="text"
        className="filter-input"
        placeholder="🔍 Search by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        className="filter-input"
        placeholder="⭐ Min rating"
        min="0"
        max="5"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
