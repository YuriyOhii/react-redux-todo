// import { filtersReducer } from './filtersSlice';
// import { tasksReducer } from './tasksSlice';
// import { configureStore } from '@reduxjs/toolkit'

import { configureStore } from '@reduxjs/toolkit';
import { exampleReducer } from './exampleSlice';

// export const store = configureStore({
// reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
// }
// });

export const store = configureStore({
  reducer: {
    tasks: exampleReducer,
  },
});
