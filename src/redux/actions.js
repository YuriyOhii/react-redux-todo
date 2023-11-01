import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => ({
  payload: { text, id: nanoid(), completed: false },
}));
export const deleteTask = createAction('tasks/deleteTask');
export const toggleCompleted = createAction('tasks/toggleCompleted');
export const setFiltersStatus = createAction('filters/setFiltersStatus');
