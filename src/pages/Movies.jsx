import { useState } from 'react';
import { SearchMovie } from '../components/SearchMovie/SearchMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <SearchMovie />

      <div>
        <h1>Trenging today</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {/* <StyledLink to={`movies/${trendmovies.id}`} key={trendmovies.id}>
                {trendmovies.title}
              </StyledLink> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Movies;
