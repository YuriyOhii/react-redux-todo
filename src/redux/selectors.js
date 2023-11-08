import { createSelector } from '@reduxjs/toolkit';
import { STATUSFILTERS } from './constants';
export const selectItems = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectFilter = state => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectItems, selectFilter],
  (tasks, filter) => {
    switch (filter) {
      case STATUSFILTERS.active:
        return tasks.filter(el => !el.completed);
      case STATUSFILTERS.completed:
        return tasks.filter(el => el.completed);
      default:
        return tasks;
    }
  }
);

export const selectTasksCount = createSelector([selectItems], tasks => {
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return count;
});
