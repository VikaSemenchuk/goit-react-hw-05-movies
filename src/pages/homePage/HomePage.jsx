import { useState, useEffect } from 'react';

import { APIgetTrandingMovies } from 'components/service/api';
import MovieList from 'components/movieList/MovieList';

import { MainTitle } from './HomePage.styled';
import { toast } from 'react-toastify';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const results = await APIgetTrandingMovies();
        setMovies(results);
        
      } catch (error) {
        toast.error(`Oops, some error occurred... Message: ${error.message}`);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <MainTitle>Trending film</MainTitle>
      {movies && <MovieList movies={movies} />}
    </>
  );
}
