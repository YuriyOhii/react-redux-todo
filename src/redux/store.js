// import { filtersReducer } from './filtersSlice';
// import { tasksReducer } from './tasksSlice';
// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
// reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
// }
// });

import { configureStore } from '@reduxjs/toolkit';
import { exampleReducer } from './exampleSlice';
export const store = configureStore({
  reducer: exampleReducer,
});
