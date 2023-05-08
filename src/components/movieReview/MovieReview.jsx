import { APImovieDetailsReviews } from 'components/service/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListReview, ReviewSpan, ReviewTitle } from './MovieReview.styled';

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReview = async () => {
      try {
        const data = await APImovieDetailsReviews(movieId);
        setReviews(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovieReview();
  }, [movieId]);
  return (
    <>
      {error !== null && <p>Oops, some error occurred... Message: {error}</p>}

      {reviews.length === 0 ? (
        <p>Sorry there are still no reviews</p>
      ) : (
        <ListReview>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <ReviewTitle>
                  <ReviewSpan>Author: </ReviewSpan>
                  {author}
                </ReviewTitle>
                <p>{content}</p>
              </li>
            );
          })}
        </ListReview>
      )}
    </>
  );
};

export default MovieReview;
