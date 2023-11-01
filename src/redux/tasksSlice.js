import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksInitState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitState,
  reducers: {
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    },
    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: text => ({
        payload: {
          text,
          id: nanoid(),
          completed: false,
        },
      }),
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
