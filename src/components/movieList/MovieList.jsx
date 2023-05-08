import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from 'components/movieListItem/MovieListItem';

import { StyledMovieList } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map(el => {
        return <MovieListItem key={el.id} {...el} />;
      })}
    </StyledMovieList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieList;
