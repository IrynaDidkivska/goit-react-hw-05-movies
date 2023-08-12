import { SiThemoviedatabase } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHomeTitle = styled.h1`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-left: 30px;
  font-weight: 500;
  color: #4083d4;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: orange;
    font-weight: 600;
  }
`;

export const Icon = styled(SiThemoviedatabase)`
  color: orange;
  width: 1.5em;
  height: 1.5em;
`;
