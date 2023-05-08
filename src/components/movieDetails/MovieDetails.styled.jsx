import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: solid 3px rgba(0, 0, 0, 0.14);
`;

export const MovieDetailTextWrapper = styled.div`
  display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 30px;
  color: #03390c;
`;

export const WrapperTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  color: #03390c;
`;
export const WrapperText = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  color: #03390c;
`;
export const LinkWrapper = styled.div`
  display: flex;
  gap: 5px;

  margin-bottom: 10px;
  padding: 15px 0;

  border-bottom: solid 3px rgba(0, 0, 0, 0.14);
`;

export const MovieNavLink = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #0dc456;
  font-weight: 500;

  &.active,
  :hover,
  :focus {
    color: #07893f;
    border-bottom: solid 1px green;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
