import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHomeTitle = styled.h1`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
