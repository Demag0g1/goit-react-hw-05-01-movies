import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/all/day',
      params: {
        language: 'en-US',
        page: 1,
        api_key: '6f70f7d8034c486bbf0597ae252bbef6',
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer 6f70f7d8034c486bbf0597ae252bbef6',
      },
    };
    axios
      .request(options)
      .then(function (res) {
        console.log(res.data);
        const newMovies = res.data.results;

        setMovies(newMovies);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Home;
