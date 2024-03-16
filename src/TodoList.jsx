import React, { useState } from 'react';
import './App.css'; 

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleRemoveAllTodos = () => {
    setTodos([]);
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    }));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Enter a new todo"
          value={inputValue}
          onChange={(e)=>{setInputValue(e.target.value)}}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <div>
              <button onClick={() => handleEditTodo(todo.id, prompt("Edit Todo", todo.text))}>Edit</button>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <div className="remove-all">
          <button onClick={handleRemoveAllTodos}>Remove All</button>
        </div>
      )}
    </div>
  );

}

export default TodoList;

