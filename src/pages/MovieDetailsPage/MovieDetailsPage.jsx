import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovie } from '../../services/movies.js';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn.jsx';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLink = useRef(location.state);

  useEffect(() => {
    if (!movieId) return;
    const fetching = async () => {
      try {
        const res = await getMovie(movieId);
        setMovie(res);
      } catch (error) {
        console.error(error);
      }
    };
    movieId && fetching();
  }, [movieId]);

  const navigate = useNavigate();
  const handleCLick = () => {
    navigate(backLink.current ?? '/movies');
  };

  return (
    movie && (
      <>
        <GoBackBtn onClick={handleCLick} />
        <div className={css.card}>
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` : defaultImg}
            alt={movie.title}
            className={css.poster}
          />
          <div className={css.details}>
            <h2 className={css.title}>{movie?.title} ({movie?.release_date?.split('-')[0] ?? ''})</h2>
            <p className={css.description}>{movie?.overview}</p>
            <h4>Genres</h4>
            <div className={css.genres}>
              {movie?.genres?.map((el) => (
                <span key={el.id}>{el.name}</span>
              ))}
            </div>
            <p className={css.rating}>⭐ {movie?.vote_average} / 10</p>
          </div>
        </div>
        <hr />
        <h3>Additional Information</h3>
        <ul>
          <li><Link to="cast">Cast</Link></li>
          <li><Link to="reviews">Reviews</Link></li>
        </ul>
        <hr />
        <hr />
        <Suspense>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default MovieDetailsPage;
