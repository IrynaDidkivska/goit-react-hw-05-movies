import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledAuthorItem, StyledAuthorList } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=d7edc5f9c6032a710ce2eb6fede0fed8&language=en-US`
      )
      .then(res => setReviews(res.data.results));
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
