import React, { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../redux/actionTypes";
import { addTodo, updateSearchTerm } from "../redux/action";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal TODO APP
      </h2>

      {/* input text and btn */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus />
        </button>
      </div>

      {/* filter and search */}
      <div className="flex md:flex-row flex-col gap-2 items-center justify-between">
        <FilterButton />

        <div className="flex items-center mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            name="searchInput"
            id="searchInput"
            placeholder="Search Todo"
            className="flex-grow p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
          />

          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
