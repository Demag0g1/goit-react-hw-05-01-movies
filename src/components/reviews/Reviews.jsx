import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/api/Api';
import Loader from 'components/loader/Loader';
import styles from './Reviews.module.css';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReviewsData = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchReviews(movieId);
        setReviews(results);
        setError(null);
      } catch (error) {
        setReviews([]);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviewsData();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.wrapper}>
      <h2>Reviews</h2>

      {reviews.length ? (
        <ul className={styles['reviews-container']}>
          {reviews.map(review => (
            <li
              className={styles['review-card']}
              key={review.id}
            >
              <p className={styles.author}>
                Author: {review.author}
              </p>
              <p className={styles.review}>
                {review.content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>
          Sorry, but we don't have any reviews for this
          movie ¯\_(ツ)_/¯
        </h3>
      )}
    </div>
  );
};

export default Review;
