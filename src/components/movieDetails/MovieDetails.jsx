import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  LinkWrapper,
  MovieDetailsWrapper,
  MovieDetailTextWrapper,
  MovieNavLink,
  MovieTitle,
  WrapperTitle,
  WrapperText,
} from './MovieDetails.styled';

export default function MovieDetails({
  poster_path,
  original_title,
  overview,
  genres,
  vote_average,
  release_date,
}) {
  const location = useLocation();
  const date = new Date(release_date).getFullYear();
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : 'https://via.placeholder.com/300x450?text=Sorry+No+Poster';
  const score = vote_average.toFixed(1);
  const stringOfGenres = genres.map(el => el.name).join('  ');

  return (
    <>
      <MovieDetailsWrapper>
        <img src={poster} alt={original_title} />

        <MovieDetailTextWrapper>
          <div>
            <MovieTitle>
              {original_title} ({date})
            </MovieTitle>
            <WrapperText>User score: {score}%</WrapperText>
          </div>

          <div>
            <WrapperTitle>Overview</WrapperTitle>
            <WrapperText>{overview}</WrapperText>
          </div>

          <div>
            <WrapperTitle>Genres</WrapperTitle>
            <WrapperText>{stringOfGenres}</WrapperText>
          </div>
        </MovieDetailTextWrapper>
      </MovieDetailsWrapper>

      <h2>Additional inform</h2>

      <LinkWrapper>
        <MovieNavLink to={'cast'} state={location.state}>
          Cast
        </MovieNavLink>
        <MovieNavLink to={'review'} state={location.state}>
          Review
        </MovieNavLink>
      </LinkWrapper>
    </>
  );
}

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
};
