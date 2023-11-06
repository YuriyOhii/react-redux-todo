const { createSlice } = require('@reduxjs/toolkit');

const exampleSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchStarts(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks = action.payload;
    },
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const exampleReducer = exampleSlice.reducer;
export const {fetchError, fetchStarts, fetchSuccess} = exampleSlice.actions;