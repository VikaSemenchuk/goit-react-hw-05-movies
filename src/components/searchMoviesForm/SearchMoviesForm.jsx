import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from './SearchForm.styled';

const SearchMoviesForm = () => {
  const [, setSearchParams] = useSearchParams();

  const onSubmit = e => {
    e.preventDefault();

    const search = e.target.query.value.toLowerCase().trim();

    if (!search) return;
    setSearchParams({ search });
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie you wish"
          name="query"
        />
        <button type="submit">Search</button>
      </SearchForm>
    </div>
  );
};

export default SearchMoviesForm;
