import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movie: null,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

const { actions, reducer } = movieSlice;

export const movieReducer = reducer;
export const { setMovie } = actions;
