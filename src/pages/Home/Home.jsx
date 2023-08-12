import React, { useEffect, useState } from 'react';
import { StyledHomeTitle, StyledLink } from './Home.styled';
import { fetchTrendingMovies } from 'services/api';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(res => setMovies(res.data.results));
  }, []);

  return (
    <div>
      <StyledHomeTitle>Trenging today :</StyledHomeTitle>
      <ul>
        {movies.map(trendmovies => (
          <li key={trendmovies.id}>
            <StyledLink to={`movies/${trendmovies.id}`} state={{ location }}>
              {trendmovies.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
