import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieLink = styled(Link)`
  min-height: 600px;
  text-decoration: none;
  color: black;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const StyledMovieImg = styled.img`
  margin-bottom: 15px;
  object-fit: scale-down;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const MovieTitle = styled.p`
  font-size: 25px;
  height: 60px;
  text-align: center;
`;
