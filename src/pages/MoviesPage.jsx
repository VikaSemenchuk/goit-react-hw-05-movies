import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { APIsearchMovies } from 'components/service/api';
import SearchMoviesForm from 'components/searchMoviesForm/SearchMoviesForm';
import MovieList from 'components/movieList/MovieList';

export default function MoviesPage() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      try {
        const results = await APIsearchMovies(query);
        setSearchMovies(results);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, [query]);
  return (
    <>
      <SearchMoviesForm />
      {!!searchMovies?.length && <MovieList movies={searchMovies} />}
      {error !== null && <p>Oops, some error occurred... Message: {error}</p>}
    </>
  );
}
