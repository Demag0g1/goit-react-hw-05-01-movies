import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import {
  useParams,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';
import { LeftCircleTwoTone } from '@ant-design/icons';
import { fetchById } from '../api/Api';
import Loader from '../loader/Loader';
import MovieItemCard from '../movieitem/MovieItemCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  if (isLoading) return <Loader />;

  return (
    <>
      <div>
        <Link to={location?.state?.from ?? '/'}>
          <button type="button">
            <LeftCircleTwoTone
              style={{
                width: '30px',
                height: '20px',
                display: 'inline-block',
                flexDirection: 'row',
                alignItems: 'center',
                textAlign: 'center',
                padding: '6px',
              }}
            />
            Go back
          </button>
        </Link>
        <MovieItemCard movie={selectedMovie} />{' '}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
