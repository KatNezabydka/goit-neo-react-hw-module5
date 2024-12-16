import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/movies.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import css from './HomePage.module.css';

const HomePage = () => {

  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await getTrendingMovies();

        setMovieList(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetching();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending Today</h1>
      {movieList && <MovieList result={movieList} />}
    </div>
  );
};

export default HomePage;
