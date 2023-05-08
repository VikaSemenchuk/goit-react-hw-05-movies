import { useState, useEffect } from 'react';

import { APIgetTrandingMovies } from 'components/service/api';
import MovieList from 'components/movieList/MovieList';

import { MainTitle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const results = await APIgetTrandingMovies();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <MainTitle>Trending film</MainTitle>
      {movies && <MovieList movies={movies} />}
      {error !== null && <p>Oops, some error occurred... Message: {error}</p>}
    </>
  );
};

export default HomePage;
