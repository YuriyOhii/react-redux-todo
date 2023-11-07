import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './options';

const initSlice = {
  items: [],
  isLoading: false,
  error: null,
};

const exampleSlice = createSlice({
  name: 'tasks',
  initialState: initSlice,
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const exampleReducer = exampleSlice.reducer;
