import React, { Suspense, useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { APImovieDetails } from 'components/service/api';
import Loader from 'components/loader/Loader';
import GoBackButton from 'components/goBackBtn/GoBackButton';
import MovieDetails from 'components/movieDetails/MovieDetails';
import NotFoundPage from 'pages/notFoundPage/NotFoundPage';

export default function MoviesDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) <NotFoundPage />;

    const getMoviesDetails = async () => {
      try {
        const results = await APImovieDetails(movieId);
        setMovie(results);

      } catch (error) {
        toast.error(`Oops, some error occurred... Message: ${error.message}`);
        // alert(`Oops, some error occurred... Message: ${error}`)
      }
    };
    getMoviesDetails();
  }, [movieId]);

  return (
    <>
      {movie ? (
        <>
          <GoBackButton />
          <MovieDetails {...movie} />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}
