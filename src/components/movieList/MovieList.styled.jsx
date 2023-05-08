import styled from 'styled-components';

export const StyledMovieList = styled.ul`
  display: grid;
  width: calc(100% - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
