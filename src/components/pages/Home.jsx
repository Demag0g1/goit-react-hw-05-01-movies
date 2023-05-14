import { useState, useEffect } from 'react';
import { fetchTrend } from '../api/Api';
import ListMovies from '../listmovies/ListMovies';
import Loader from 'components/loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchTrend();
        setTrendMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>
          Sorry, we could not fetch the trending movies.
          Please try again later.
        </p>
      ) : (
        <ListMovies trendMovies={trendMovies} />
      )}
    </>
  );
};

export default Home;
