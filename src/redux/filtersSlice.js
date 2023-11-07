import { createSlice } from '@reduxjs/toolkit';

const filtersInitState = {
  status: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitState,
  reducers: {
    setFiltersStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFiltersStatus } = filtersSlice.actions;
