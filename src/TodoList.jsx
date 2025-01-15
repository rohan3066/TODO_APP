import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css"; // Import the updated CSS file

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(),done:false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim()) {
      setTodos((prevTodo) => [...prevTodo, { task: newTodo, id: uuidv4(),done:false }]);
      setNewTodo("");
    }
  };

  let updatedTodoValue = (event) => setNewTodo(event.target.value);

  let deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => ({ ...todo, task: todo.task.toUpperCase() }))
    );
  };

  let lowerCase = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => ({ ...todo, task: todo.task.toLowerCase() }))
    );
  };

  let uperCaseOne = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
      )
    );
  };

  let lowerCaseOne = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toLowerCase() } : todo
      )
    );
  };

  let taskDone=(id)=>{
    setTodos((prevTodo) =>
        prevTodo.map((todo) =>
            todo.id === id ? { ...todo, done:true } : todo
    )
    );
    

  }

  let allDone=()=>{
    setTodos((prevTodo) =>
        prevTodo.map((todo) =>
            ({ ...todo, done:true })
    )
    );
    

  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        placeholder="Add a task..."
        value={newTodo}
        onChange={updatedTodoValue}
      />
      <button onClick={addNewTask} className="add-task-btn">
        Add Task
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.done ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
            <div className="button-container">
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                Delete
              </button>
              <button
                onClick={() => uperCaseOne(todo.id)}
                className="uppercase-btn"
              >
                Uppercase
              </button>
              <button
                onClick={() => taskDone(todo.id)}
                className="lowercase-btn"
              >
                Done
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button onClick={upperCaseAll} className="uppercase-all-btn">
          Upper All
        </button>
        <button onClick={allDone} className="lowercase-all-btn">
          All Done
        </button>
      </div>
    </div>
  );
}
