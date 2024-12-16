import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/movies.js';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  const { movieId } = useParams();

  const [casts, setCasts] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetching = async () => {
      try {
        const res = await getMovieCredits(movieId);
        setCasts(res.cast);
      } catch (error) {
        console.error(error);
      }
    };

    movieId && fetching();
  }, [movieId]);

  return (
    <ul>
      {casts && casts.map((cast) => (
        <li className={css.card} key={cast.cast_id}>
          <img
            src={cast.profile_path ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}` : defaultImg}
            alt={cast.name}
            className={css.poster}
          />
          <div className={css.details}>
            <h2 className={css.title}>{cast.name}</h2>
            <p className={css.description}>Character: {cast.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
