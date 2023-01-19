import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import MovieSlick from '../MovieListing/MovieSlick'
import './Home.scss';

import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />

      <MovieSlick/>

    </div>
  );
};

export default Home;
