import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { APImovieDetailsReviews } from 'components/service/api';
import { ListReview, ReviewSpan, ReviewTitle } from './MovieReview.styled';

export default function MovieReview () {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReview = async () => {
      try {
        const data = await APImovieDetailsReviews(movieId);
        setReviews(data);

      } catch (error) {
        toast.error(`Oops, some error occurred... Message: ${error.message}`)
      }
    };
    getMovieReview();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0  ? (
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