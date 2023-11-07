import { createSlice } from '@reduxjs/toolkit';

const filtersInitState = {
  status: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitState,
  reducers: {},
});

export const filtersReducer = filtersSlice.reducer;
