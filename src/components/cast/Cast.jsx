import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'components/api/Api';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { cast } = await fetchCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.castHeader}>Cast</h2>
      {cast.length ? (
        <ul className={styles.castList}>
          {cast.map(actor => (
            <li
              className={`${styles.castItem} cast-card`}
              key={actor.id}
            >
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
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
      ) : (
        <p className={styles.notFoundInfo}>
          We don't have any information about the cast yet.
        </p>
      )}
    </div>
  );
};

export default Cast;
