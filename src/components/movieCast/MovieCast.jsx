import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APImovieDetailsCast } from 'components/service/api';
import { StyledCastList } from './MovieCast.styled';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await APImovieDetailsCast(movieId);
        setCast(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {error !== null && <p>Oops, some error occurred... Message: {error}</p>}
      {cast.length === 0 ? (
        <p>Sorry we have no information about the actors</p>
      ) : (
        <StyledCastList>
          {cast.map(({ id, profile_path, name, character }, i) => {
            let newId = id * i;
            const poster = profile_path
              ? `https://image.tmdb.org/t/p/w185${profile_path}`
              : 'https://via.placeholder.com/185x278?text=Sorry+No+Photo';
            return (
              <li key={newId}>
                <img src={poster} alt={name} />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </StyledCastList>
      )}
    </>
  );
};

export default MovieCast;
