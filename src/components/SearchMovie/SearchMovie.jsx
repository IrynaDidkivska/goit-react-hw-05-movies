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

export const SearchMovie = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [value, setValue] = useState(query);

  useEffect(() => {
    if (query) {
      fetchMovieByQuery(query).then(
        res => console.log(res.data.results) || setMovie(res.data.results)
      );
    }
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value.trim();

    setSearchParams(value !== '' ? { query: value } : {});
    if (query.trim() === '') {
      toast.warning(`It is hard to search with such little information`);
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
