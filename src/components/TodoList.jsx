import { useSignal } from "@preact/signals";

function TodoList({ state }) {

  const { todos, completed } = state
  const newItem = useSignal("");

  function addTodo() {
    todos.value = [...todos.value, { text: newItem.value, completed: false, createAt: new Date() }];
    newItem.value = ""; // Reset input value on add
  }

  function removeTodo(index) {
    todos.value.splice(index, 1)
    todos.value = [...todos.value];
  }

  const onInput = event => (newItem.value = event.target.value);

  return (
    <>
      <input type="text" value={newItem.value} onInput={onInput} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {(todos.value).map((todo, index) => {
          return (
            <li>
              <input
                type="checkbox"
                checked={todo.completed}
                onInput={() => {
                  todo.completed = !todo.completed
                  todos.value = [...todos.value];
                }}
              />
              {todo.completed ? <s>{todo.text}</s> : todo.text}{' '}
              <button onClick={() => removeTodo(index)}>❌</button>
            </li>
          );
        })}
      </ul>
      <p>Completed count: {completed}</p>
    </>
  );
}

export default TodoList