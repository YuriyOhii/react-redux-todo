import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';


export const fetchTasks = createAsyncThunk('tasks/fetching', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
