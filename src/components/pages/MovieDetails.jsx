import { useState, useEffect } from 'react';
import axios from 'axios';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const API_KEY = '6f70f7d8034c486bbf0597ae252bbef6';
  const id = match.params.id;
  console.dir({ match });
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjcwZjdkODAzNGM0ODZiYmYwNTk3YWUyNTJiYmVmNiIsInN1YiI6IjY0NWEzNDg2MWI3MGFlMDEyNjBkMGQzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aDY4VaKv1b5QBtDBZyfQpR3RRS2YtBq1LGGVGh_0xEI',
      },
    };

    const fetchMovie = async () => {
      try {
        const { data } = await axios(options);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCast = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
        );
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchReviews = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
        );
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
    fetchCast();
    fetchReviews();
  }, [id]);
  if (!movie) return null;
  return (
    <div>
      <h1>{movie.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster for ${movie.original_title}`}
      />
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <h2>Cast</h2>
      <Cast cast={cast} />
      <h2>Reviews</h2>
      <Reviews reviews={reviews} />
    </div>
  );
};
export default MovieDetails;
