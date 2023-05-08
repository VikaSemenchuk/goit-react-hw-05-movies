import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/layout/Layout';

const LazyHomePage = lazy(() => import('../pages/homePage/HomePage'));
const LazyMoviesPage = lazy(() => import('../pages/MoviesPage'));
const LazyMovieDetailsPage = lazy(() => import('../pages/MoviesDetailsPage'));
const LazyMovieCast = lazy(() => import('./movieCast/MovieCast'));
const LazyMovieReview = lazy(() => import('./movieReview/MovieReview'));
const LazyNotFoundPage = lazy(() =>
  import('../pages/notFoundPage/NotFoundPage')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHomePage />} />
        <Route path="movies" element={<LazyMoviesPage />} />
        <Route path="movies/:movieId" element={<LazyMovieDetailsPage />}>
          <Route path="cast" element={<LazyMovieCast />} />
          <Route path="review" element={<LazyMovieReview />} />
        </Route>
      </Route>
      <Route path="*" element={<LazyNotFoundPage />} />
    </Routes>
  );
};
