import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  'tasks/fetching',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text, completed: false });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${itemId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleIsCompleted = createAsyncThunk(
  'tasks/toggleIsCompleted',
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
