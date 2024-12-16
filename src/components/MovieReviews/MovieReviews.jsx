import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/movies.js';
import css from './MovieReview.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetching = async () => {
      try {
        const res = await getMovieReviews(movieId);
        setReviews(res);
      } catch (error) {
        console.error(error);
      }
    };

    movieId && fetching();
  }, [movieId]);

  return (
    <ul>
      {reviews && reviews.total_results > 0 ? reviews.results.map((review) => (
          <li className={css.card} key={review?.id}>
            <div className={css.details}>
              <h2 className={css.title}>Author: {review.author}</h2>
              <p className={css.description}>{review.content}</p>
            </div>
          </li>
        )) :
        <li>We don&#39;t have any reviews for movie</li>
      }
    </ul>
  );
};

export default MovieReviews;
