import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ItemWrapper,
  MovieTitle,
  StyledMovieImg,
  StyledMovieLink,
} from './MovieListItem.styled';

const MovieListItem = ({ id, title, poster_path }) => {
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w342${poster_path}`
    : 'https://via.placeholder.com/342x512?text=Sorry+No+Poster';
  const location = useLocation();
  const movieId = id;

  return (
    <li>
      <StyledMovieLink to={`/movies/${movieId}`} state={{ from: location }}>
        <ItemWrapper>
          <StyledMovieImg src={poster} alt={title} />
          <MovieTitle>{title}</MovieTitle>
        </ItemWrapper>
      </StyledMovieLink>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

export default MovieListItem;
