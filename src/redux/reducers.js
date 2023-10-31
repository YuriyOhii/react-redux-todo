const { combineReducers } = require('redux');

const tasksInitState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksReducer = (state = tasksInitState, action) => {
  switch (action.type) {
    case 'tasks/addTask': {
      return [...state, action.payload];
    }

    case 'tasks/deleteTask': {
      return [...state.filter(task => task.id !== action.payload)];
    }
    case 'tasks/toggleCompleted': {
      return [
        ...state.map(task => {
          if (task.id === action.payload)
            return { ...task, completed: !task.completed };
          return task;
        }),
      ];
    }

    default:
      return state;
  }
};

const filtersInitState = {
  status: 'all',
};

const filtersReducer = (state = filtersInitState, action) => {
  switch (action.type) {
    case 'filters/setFiltersStatus': {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
