import Constants from "./constants.js";

let initialState = {
  todo: [],
  reminder: [],
  notes: [],
  todoarchive: [],
};

export const reminderReducer = (state = [], action) => {
  switch (action.type) {
    case Constants.ADD_NEW_REMINDER:
      return [...state, action.payload];
      break;
  }
  return state;
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case Constants.ADD_NEW_TODO:
      //immutability
      return [...state, action.payload];
      break;
    case Constants.ADD_EXISTING_TODOS:
      return [...state, ...action.payload];
      break;
    case Constants.ARCHIVE_TODO:
      return excludeTodoFromList(action.payload, state);
      break;
  }
  return state;
};

export const archiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.ARCHIVE_TODO:
      return [...state.todoarchive, action.payload];
      break;
  }
  return state;
};

function excludeTodoFromList(todo, list) {
  const id = todo.id;
  return list.filter((item) => {
    return item.id !== id;
  });
}
