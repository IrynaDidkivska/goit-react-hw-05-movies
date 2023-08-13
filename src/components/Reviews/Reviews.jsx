import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledAuthorItem, StyledAuthorList } from './Reviews.styled';
import { fetchMoviesRewievs } from 'services/api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesRewievs(id).then(res => setReviews(res.data.results));
  }, [id]);
  return (
    <div>
      <StyledAuthorList>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <StyledAuthorItem key={review.id}>
              <h4>Author : {review.author_details.username}</h4>
              <h5>Content:</h5>
              <p>{review.content}</p>
            </StyledAuthorItem>
          ))
        ) : (
          <p>We don't have reviews for this movie right now</p>
        )}
      </StyledAuthorList>
    </div>
  );
};
export default Reviews;
