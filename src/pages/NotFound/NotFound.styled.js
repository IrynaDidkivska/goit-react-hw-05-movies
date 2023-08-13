import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  color: #4083d4;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    color: orange;
    border-radius: 5px;
    background-color: #000;
  }
`;
