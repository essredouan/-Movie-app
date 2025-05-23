import React from 'react';
import './App.css'

function Filter({ setTitleFilter, setRatingFilter }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="5"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
