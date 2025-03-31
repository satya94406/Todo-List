import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "./context/todoSlice";
import Login from "./userAuthentication/Login";
import AddTodo from "./components/AddTodo";
import TodoItemShow from "./components/TodoItemShow";
import Header from "./components/Header";

function TodoPage() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="w-full lg:w-4/5 text-center bg-white shadow-lg rounded-lg p-6">
        <Header />
        <AddTodo />
        <TodoItemShow TodoElements={todos} onDelete={(id) => dispatch(deleteTodo(id))} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Todo-App" element={<Login />} />
        <Route path="/Todo-App/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
