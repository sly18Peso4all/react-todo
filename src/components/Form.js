import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        className="todo-input"
        placeholder="Add your todos"
      ></input>
      <button type="submit" className="todo-button" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

// <form>
//  <input type="text" onChange={inputTextHandler} className="todo-input" placeholder="Add your todos">
//   <button type="submit" className="todo-button">
//       <i className="fas fa-plus-square"></i>
//   </button>
//   <div className="select">
//       <select name="todos" className="filter-todo">
//           <option value="all">All</option>
//           <option value="completed">Completed</option>
//           <option value="uncompleted">Uncompleted</option>
//       </select>
//   </div>
//   </form>
