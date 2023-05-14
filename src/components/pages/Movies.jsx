import { useState, useEffect } from 'react';
import {
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { fetchMovie } from '../api/Api';
import SearchMovies from '../searchmovies/SearchMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMovie(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <h1>Movies Page</h1>
      <SearchMovies onSubmit={handleSubmit} />{' '}
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Movies;
