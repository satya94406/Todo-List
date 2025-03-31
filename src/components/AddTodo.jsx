import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../context/todoSlice";

function AddTodo() {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium"); 
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoName && todoDate) {
      dispatch(addTodo({ 
        id: Date.now(), 
        todoName, 
        todoDate, 
        priority: todoPriority 
      }));
      setTodoName("");
      setTodoDate("");
      setTodoPriority("Medium"); 
    }
  };

  return (
    <div className="text-black shadow-lg rounded-xl p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <b className="block mb-2 text-lg">Todo Task</b>        
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          />
        </div>

        <div className="w-full md:w-1/3">
          <b className="block mb-2 text-lg">Due Date</b>          
          <input
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          />
        </div>

        <div className="w-full md:w-1/3">
          <b className="block mb-2 text-lg">Priority</b>
          <select
            value={todoPriority}
            onChange={(e) => setTodoPriority(e.target.value)}
            className="w-full text-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          >
            <option value="High">🔥 High</option>
            <option value="Medium">⚡ Medium</option>
            <option value="Low">✅ Low</option>
          </select>
        </div>

        <div className="w-full md:w-1/3 mt-4">
          <button
            type="button"
            onClick={handleAddTodo}
            className="w-full text-lg bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
