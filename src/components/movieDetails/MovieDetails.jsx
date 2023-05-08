import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { APImovieDetails } from 'components/service/api';
import {
  LinkWrapper,
  MovieDetailsWrapper,
  MovieDetailTextWrapper,
  MovieNavLink,
  MovieTitle,
  WrapperTitle,
  WrapperText,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');
  const [poster, setPoster] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [score, setScore] = useState(null);
  const location = useLocation();

  // називаємо так як у app. БО USEPARAMS ПОВЕРТАЄ ДИНАМІЧНІ ПАРАМЕТРИ URL-РЯДКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getMoviesDetails = async () => {
      try {
        setError(null);
        const results = await APImovieDetails(movieId);
        const {
          poster_path,
          original_title,
          overview,
          genres,
          vote_average,
          release_date,
        } = results;

        const date = new Date(release_date);
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w300${poster_path}`
          : 'https://via.placeholder.com/300x574?text=Sorry+No+Poster';

        setScore(vote_average.toFixed(1));
        setTitle(original_title);
        setOverview(overview);
        setPoster(poster);
        setGenres(genres.map(el => el.name).join('  '));
        setReleaseDate(date.getFullYear());
      } catch (error) {
        setError(error.message);
      }
    };
    getMoviesDetails();
  }, [movieId]);

  return (
    <>
      {error !== null && <p>Oops, some error occurred... Message: {error}</p>}
      <MovieDetailsWrapper>
        <img src={poster} alt={title} />

        <MovieDetailTextWrapper>
          <div>
            <MovieTitle>
              {title} ({releaseDate})
            </MovieTitle>
            <WrapperText>User score: {score}%</WrapperText>
          </div>

          <div>
            <WrapperTitle>Overview</WrapperTitle>
            <WrapperText>{overview}</WrapperText>
          </div>

          <div>
            <WrapperTitle>Genres</WrapperTitle>
            <WrapperText>{genres}</WrapperText>
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
};
export default MovieDetails;
