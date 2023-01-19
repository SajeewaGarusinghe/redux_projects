import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

const initialMovieState = {
  movies: {},
  shows: {},
  details: {},
};

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'harry';
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log('Err : ', err);
      });
    console.log(response.data);
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const movieText = 'friends';
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log('Err : ', err);
      });
    return response.data;
  }
);
export const fetchAsyncDetails = createAsyncThunk(
  'movies/fetchAsyncDetails',
  async (imdbID) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&i=${imdbID}`)
      .catch((err) => {
        console.log('Err : ', err);
      });
    console.log(response.data);
    return response.data;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialMovieState,
  reducers: {
    removeDetails: (state) => {
      state.details = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('fetched successfully');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('fetched shows successfully');
      return { ...state, shows: payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log('fetched details successfully');
      return { ...state, details: payload };
    },
  },
});

export const { removeDetails } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetails = (state) => state.movies.details;
export default moviesSlice.reducer;
