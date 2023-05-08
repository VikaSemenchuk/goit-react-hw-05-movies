import React from 'react';
import { NavList, StyledHeader, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </NavList>
      </nav>
    </StyledHeader>
  );
};
