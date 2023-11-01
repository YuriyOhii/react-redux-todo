import { createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  setFiltersStatus,
  toggleCompleted,
} from './actions';

const tasksInitState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = createReducer(tasksInitState, {
  [addTask]: (state, action) => {
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    return state.filter(task => task.id !== action.payload);
  },
  [toggleCompleted]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

const filtersInitState = {
  status: 'all',
};

export const filtersReducer = createReducer(filtersInitState, {
  [setFiltersStatus]: (state, action) => {
    state.status = action.payload;
  },
});
