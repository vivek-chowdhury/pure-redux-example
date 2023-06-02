//https://dummyjson.com/todos
export async function fetchTodoList() {
  try {
    const response = await fetch("https://dummyjson.com/todos");
    const todos = await response.json();
    // console.log(todos);
    return todos;
  } catch (err) {
    // console.log(" Error : ", err);
    return err;
  }
}

export async function fetchTodo(id) {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${id}`);
    return await response.json();
  } catch (err) {
    return err;
  }
}
// fetchTodoList();
