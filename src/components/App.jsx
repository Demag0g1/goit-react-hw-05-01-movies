import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';

const Layout = lazy(() => import('./layout/Layout'));
const Home = lazy(() => import('../components/pages/Home'));
const Movies = lazy(() =>
  import('../components/pages/Movies')
);
const MovieDetails = lazy(() =>
  import('../components/pages/MovieDetails')
);
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route
            path="movies/:movieId"
            element={<MovieDetails />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </>
  );
};
export default App;
