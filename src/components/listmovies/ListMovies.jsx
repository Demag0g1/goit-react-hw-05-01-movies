import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListMovies = ({ trendMovies }) => {
  return (
    <>
      <h1>Trending Today</h1>

      <ol>
        {trendMovies.map(trendMovie => (
          <li key={trendMovie.id}>
            <Link to={`/movies/${trendMovie.id}`}>
              {trendMovie.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ListMovies;

ListMovies.propTypes = {
  trendMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};
