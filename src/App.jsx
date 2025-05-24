import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './Movielist';
import Filter from './Filter';
import Moviedetail from './Moviedetail'; // تأكد الاسم صحيح
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      title: 'Interstellar',
      description: 'Exploring space and time beyond our understanding.',
      posterURL: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/11070267-1904815103891107.jpg',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
    {
      title: 'The Notebook',
      description: 'A romantic story about a young couple who fall in love during the early years of World War II.',
      posterURL: 'https://play-lh.googleusercontent.com/BCB_kzn5jMyASxKT9lLvRf0C2pATcfFqXr9gb6n7ASX7QZqVFPSwikNXjsfpNyrrjw63_Q',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/FC6biTjEyZw',
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
    trailer: '',
  });

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const addMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating > 0 &&
      newMovie.trailer
    ) {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: '', description: '', posterURL: '', rating: 0, trailer: '' });
    } else {
      alert('Please fill all fields and set rating > 0');
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <Router>
      <div className="container">
        <h1>🎬 TOP MOVIES</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>🏠 Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />

                <h2>Add a new movie</h2>
                <input
                  type="text"
                  placeholder="Title"
                  value={newMovie.title}
                  onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newMovie.description}
                  onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Poster URL"
                  value={newMovie.posterURL}
                  onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Trailer URL"
                  value={newMovie.trailer}
                  onChange={(e) => setNewMovie({ ...newMovie, trailer: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Rating (1-5)"
                  value={newMovie.rating}
                  onChange={(e) => setNewMovie({ ...newMovie, rating: Number(e.target.value) })}
                />
                <button onClick={addMovie}>Add Movie</button>

                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:title"
            element={<Moviedetail movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
