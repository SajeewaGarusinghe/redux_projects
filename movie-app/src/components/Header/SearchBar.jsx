import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice';

import './Header.scss';

const SearchBar = () => {
  const [term, setTerm] = useState();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') {
      alert('Please enter a search term');
    } else {
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={term}
          placeholder="Search Movies or Shows"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button type="submit">
          {/* <i className="fa fa-search"></i> */}
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
