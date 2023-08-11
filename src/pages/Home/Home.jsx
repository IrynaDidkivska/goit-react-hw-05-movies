import React, { useEffect, useState } from 'react';
import { StyledHomeTitle, StyledLink } from './Home.styled';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => setMovies(res.data.results));
  }, []);

  return (
    <div>
      <StyledHomeTitle>Trenging today</StyledHomeTitle>
      <ul>
        {movies.map(trendmovies => (
          <li key={trendmovies.id}>
            <StyledLink to={`movies/${trendmovies.id}`} key={trendmovies.id}>
              {trendmovies.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
