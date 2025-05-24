import { useParams, Link } from 'react-router-dom';

function Moviedetail({ movies }) {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Moviedetail;
