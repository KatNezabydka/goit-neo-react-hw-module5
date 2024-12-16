import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ result }) => {
  const location = useLocation()

  return (
    <ul>
      {result.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
