import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { SearchForm } from './SearchForm.styled';

export default function SearchMoviesForm () {
  const [searchQuary, setSearchQuary] = useState('');
  const [, setSearchParams] = useSearchParams();

  function onChange ({ target: { value } }) {
    setSearchQuary(value);
  };

  function onSubmit (e) {
    e.preventDefault();
    const search = searchQuary.toLowerCase().trim();

    if (!search) toast.warning('Please enter some information for search');

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
          value={searchQuary}
          onChange={onChange}
          name="query"
        />
        <button type="submit">Search</button>
      </SearchForm>
    </div>
  );
};