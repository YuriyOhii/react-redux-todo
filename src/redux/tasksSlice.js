import { createSlice } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  fetchTasks,
  toggleIsCompleted,
} from './operations';

const tasksInitState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejecting = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitState,
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejecting)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejecting)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(el => el.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, handleRejecting)
      .addCase(toggleIsCompleted.pending, handlePending)
      .addCase(toggleIsCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(el => {
          if (el.id === action.payload.id)
            return { ...el, completed: !el.completed };
          return el;
        });
      })
      .addCase(toggleIsCompleted.rejected, handleRejecting),
});

export const tasksReducer = tasksSlice.reducer;
