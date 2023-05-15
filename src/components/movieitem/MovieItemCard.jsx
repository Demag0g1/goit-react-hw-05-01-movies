import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/loader/Loader';
import { useState, useEffect, useRef } from 'react';
import styles from './MovieItemCard.module.css';

const MovieItemCard = ({ movie }) => {
  const {
    title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = movie;

  const location = useLocation();
  const [from] = useState(location.state?.from || '/');
  const prevFrom = useRef(from);

  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : 'https://via.placeholder.com/200x300.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated';

  useEffect(() => {
    prevFrom.current = from;
  }, [from]);

  if (!title) {
    return <Loader />;
  }
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.poster}
          src={posterUrl}
          alt={`${title}.poster`}
        />

        <div className={styles.about}>
          <h2 className={styles.title}>
            {title ?? 'Unknown'} ({releaseYear})
          </h2>
          <p className={styles.itemInfo}>
            User Score: {userScore}
          </p>
          <p className={styles.itemInfo}>
            <span className={styles.accentText}>
              Overview:
            </span>{' '}
            {overview}
          </p>

          {genres && genres.length > 0 && (
            <p className={styles.itemInfo}>
              <span className={styles.accentText}>
                Genres:
              </span>
              {genres.map(genre => genre.name).join(', ')}
            </p>
          )}
        </div>
      </div>

      <div className={styles.moreWrapper}>
        <h3 className={styles.moreHeader}>
          Additional information
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <NavLink
              className={styles.styledLink}
              to={{
                pathname: `${location.pathname}/cast`,
                state: { from: location },
              }}
            >
              Cast
            </NavLink>
          </li>

          <li className={styles.listItem}>
            <NavLink
              className={styles.styledLink}
              to={{
                pathname: `${location.pathname}/reviews`,
                state: { from: location },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

MovieItemCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieItemCard;
