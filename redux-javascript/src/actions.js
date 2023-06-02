import { fetchTodoList, fetchTodo } from "./services/todo-service.js";
import Constants from "./constants.js";

export const addNewToDoItem = (
  title = "New TODO",
  description = "Add description"
) => {
  return {
    type: Constants.ADD_NEW_TODO,
    payload: {
      title: title,
      description: description,
    },
  };
};

export const addNewReminder = (
  title = "New Reminder",
  description = "Add description"
) => {
  return {
    type: Constants.ADD_NEW_REMINDER,
    payload: {
      title: title,
      description: description,
    },
  };
};

/* 
 Thunk will provide two parameters to this particular method.
 dispatch: reference of store dispatch method.
 getState: through this we can access global state
 */
export const importTodoList = async (dispatch, getState) => {
  const response = await fetchTodoList();
  // console.log(response);
  // console.log(getState());
  dispatch({ type: Constants.ADD_EXISTING_TODOS, payload: response.todos });
};

export const archiveTodo = (todoId) => {
  //Thunk always pass these two parameters and if we want to pass any parameter for api call
  // we can use closure to pass data.
  return async (dispatch, getState) => {
    const response = await fetchTodo(todoId);
    dispatch({ type: Constants.ARCHIVE_TODO, payload: response });
  };
};
