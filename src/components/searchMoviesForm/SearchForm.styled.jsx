import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  max-width: 600px;
  margin: 30px 0;

  background-color: #fff;

  & button {
    min-width: 60px;
    height: 35px;

    border: solid 1px #0b562f;
    border-radius: 5px;

    color: #07893f;
    background-color: #b6f6b6;

    font-size: 15px;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover,
    :focus {
      color: #ffffff;
      background-color: #07893f;
      transition: all 0.3s ease-in-out;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }

  & input {
    width: 100%;
    padding: 5px 10px;

    border: solid 1px #0b562f;
    border-radius: 5px;
    outline-color: green;

    color: #044f0e;
    font-size: 20px;
  }
`;
