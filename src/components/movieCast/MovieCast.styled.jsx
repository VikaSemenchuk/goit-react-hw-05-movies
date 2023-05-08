import styled from 'styled-components';

export const StyledCastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;

  width: calc(100% - 48px);
  margin: 20px auto;
  padding: 0;

  list-style: none;
`;
