import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  padding: 10px;
  border-bottom: 2px orange solid;
`;
export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const StyledLink = styled(NavLink)`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 3px;
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

export const StyledOutlet = styled.div`
  padding: 0 15px 0 15px;
  display: block;
  margin: 0 auto;
`;
