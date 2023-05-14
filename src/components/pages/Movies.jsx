// import movie from './MovieDetails';

const Movies = ({ movie }) => {
  return (
    <div>
      <h2>{movie.name}</h2>
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster for ${movie.name}`}
      />
    </div>
  );
};

export default Movies;
