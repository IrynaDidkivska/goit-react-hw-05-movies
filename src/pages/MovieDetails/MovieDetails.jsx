import React, { Suspense, useEffect, useState } from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import {
  Genres,
  StyledAddText,
  StyledMovieImg,
  StyledMovieItem,
  StyledMovieList,
  StyledTitle,
  StyledWrapper,
  StyledLink,
} from './MovieDetails.styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieDetails(id).then(res => setMovie(res.data));
  }, [id]);
  const { backdrop_path, vote_average, overview, title, genres } = movie;
  const raiting = ((vote_average / 100) * 100).toFixed(2) + '%';
  return (
    <div>
      <StyledLink to={location.state?.from ?? '/'}>
        <TiArrowBackOutline style={{ width: '1.5em', height: '1.5em' }} />
        Go Back
      </StyledLink>
      <StyledMovieList>
        <StyledMovieItem key={title}>
          <StyledMovieImg
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt="{title}"
          />
          <StyledTitle>{title}</StyledTitle>
          <p> User score: {raiting}</p>
          <h3>Overview </h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <Genres>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </Genres>
        </StyledMovieItem>
      </StyledMovieList>
      <StyledAddText>Additional information</StyledAddText>
      <StyledWrapper>
        <StyledLink to={`cast`} state={{ from: location }}>
          Cast
        </StyledLink>
        <StyledLink to={`reviews`} state={{ from: location }}>
          Reviews
        </StyledLink>
      </StyledWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
