import { useState } from 'react';
import { SearchMovie } from '../components/SearchMovie/SearchMovie';
import { StyledHomeTitle, StyledLink } from './Home/Home.styled';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
      <SearchMovie setSearchResults={setSearchResults} />

      <div>
        <StyledHomeTitle>Нour search result</StyledHomeTitle>
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <StyledLink to={`movies/${movie.id}`} key={movie.id}>
                {movie.title}
              </StyledLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Movies;
