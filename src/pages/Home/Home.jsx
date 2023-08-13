import React, { useEffect, useState } from 'react';
import { Icon, StyledHomeTitle, StyledLink } from './Home.styled';
import { fetchTrendingMovies } from 'services/api';
import { useLocation } from 'react-router-dom';
// import { SiThemoviedatabase } from 'react-icons/si';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location);

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
              <Icon />
              {trendmovies.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
