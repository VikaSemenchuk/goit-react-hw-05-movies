import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/loader/Loader';
import GoBackButton from 'components/goBackBtn/GoBackButton';
import MovieDetails from 'components/movieDetails/MovieDetails';

const MoviesDetailsPage = () => {
  return (
    <>
      <GoBackButton />
      <MovieDetails />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetailsPage;
