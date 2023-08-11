import React from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import { StyledLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <div>
      <StyledLink to="/">
        <TiArrowBackOutline style={{ width: '1.5em', height: '1.5em' }} />
        Go Home
      </StyledLink>
      <img
        src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
        alt="Error page"
      />
    </div>
  );
};
export default NotFound;
