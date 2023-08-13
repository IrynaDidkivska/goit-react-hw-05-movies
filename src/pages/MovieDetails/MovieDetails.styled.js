import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #4083d4;
  transition: all 300ms ease-in-out;
  &:hover {
    color: orange;
    border-radius: 5px;
    background-color: #000;
  }
`;
export const StyledGoBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #4083d4;
  transition: all 300ms ease-in-out;
  &:hover {
    color: orange;
  }
`;
export const StyledMovieList = styled.ul`
  margin-bottom: 10px;
`;
export const StyledMovieItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const StyledMovieImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 15px;
`;

export const StyledTitle = styled.h3`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: orange;
  }
`;

export const Genres = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledAddText = styled.h4`
  text-align: center;
`;
export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
