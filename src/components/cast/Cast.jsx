import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'components/api/Api';
import Loader from 'components/loader/Loader';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCastData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchCast(movieId);
        setCast(response.cast);
        setError(null);
      } catch (error) {
        setCast([]);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCastData();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className={styles.castList}>
      {cast.map(actor => (
        <li
          className={`${styles.castItem} ${styles['cast-card']}`}
          key={actor.id}
        >
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={`${actor.name} profile`}
              className={styles['cast-card__img']}
            />
          ) : (
            <img
              src={`https://via.placeholder.com/200x300?text=No+Image`}
              alt={`${actor.name} profile`}
              className={styles['cast-card__img']}
            />
          )}

          <div className={styles.castInfo}>
            <h3 className={styles.castName}>
              {actor.name}
            </h3>
            <p>Character: {actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
