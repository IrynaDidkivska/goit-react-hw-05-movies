import { useState } from 'react';
import { SearchMovie } from '../components/SearchMovie/SearchMovie';
import { StyledHomeTitle, StyledLink } from './Home/Home.styled';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  return (
    <>
      <SearchMovie setSearchResults={setSearchResults} />

      <div>
        <StyledHomeTitle>Your search result</StyledHomeTitle>
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <StyledLink
                to={`${movie.id}`}
                key={movie.id}
                state={{ location }}
              >
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
