import store from "./store.js";
import * as Actions from "./actions.js";

store.subscribe(() => {
  //Global state
  console.log(store.getState());
});

store.dispatch(
  Actions.addNewToDoItem("Morning Walk", "Need to go to morning walk today")
);

store.dispatch(
  Actions.addNewReminder(
    "Create UI",
    "Remind me to create new UI for this project"
  )
);

//While using thunk we need to send method reference instead of call method directly
// like we were doing for normal dispatch call [i.e. without brackets]
store.dispatch(Actions.importTodoList);

setTimeout(() => {
  store.dispatch(Actions.archiveTodo(2));
}, 10000);
