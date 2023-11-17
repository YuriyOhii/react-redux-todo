import { createSlice } from '@reduxjs/toolkit';

const filtersInitState = {
  status: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
