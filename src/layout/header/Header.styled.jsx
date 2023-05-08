import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  display: flex;
  align-items: center;

  max-width: 1600px;
  min-height: 64px;
  margin: 0 auto;
  padding: 5px 20px;

  background-color: #ffffff;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  text-transform: uppercase;

  &.active,
  :hover,
  :focus {
    color: #07893f;
    background-color: #b6f6b6;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
