import { filtersReducer } from './filter/filtersSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
}
});

