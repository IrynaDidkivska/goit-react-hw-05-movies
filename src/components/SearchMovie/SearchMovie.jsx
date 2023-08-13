import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchMovie.styled';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/api';
import PropTypes from 'prop-types';

export const SearchMovie = ({ setSearchResults }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [value, setValue] = useState(query);

  useEffect(() => {
    if (query) {
      fetchMovieByQuery(query).then(res => setSearchResults(res.data.results));
    }
  }, [query, setSearchResults]);

  const onSubmit = e => {
    e.preventDefault();

    setSearchParams(value !== '' ? { query: value } : {});
    if (!query && !value) {
      toast.warning(`It is hard to search with such little information`);
      return;
    } else if (query.toLocaleLowerCase() === value.toLocaleLowerCase()) {
      toast.info(`Please change your request`);
      return;
    }

  };

  return (
    <>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <FcSearch style={{ width: '2em', height: '2em' }} />
        </SearchFormButton>
        <SearchFormInput
          value={value}
          onChange={e => setValue(e.target.value)}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>
    </>
  );
};

SearchMovie.propTypes = { setSearchResults: PropTypes.func.isRequired };
