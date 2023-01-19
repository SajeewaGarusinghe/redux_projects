import { createSlice } from '@reduxjs/toolkit';

const initialMovieState = {
  movies: {},
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialMovieState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;
