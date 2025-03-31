import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateName = (name) => {
    return /^[A-Za-z\s]+$/.test(name) && name.trim().length > 0;
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateName(name)) {
      setError("Invalid name. Use only letters and spaces.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError(""); 
    navigate("/Todo-App/todo");
  };

  return (
    <div>
      <form className="w-4/5 md:w-96 mx-auto m-8 relative bg-gray-900 top-28 p-4 rounded-3xl opacity-90">
        <h1 className="font-bold text-white p-4 text-3xl lg:text-4xl">Sign In</h1>

        <input
          type="text"
          placeholder="Name"
          className="w-[95%] p-2 m-2 rounded-md bg-gray-100"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="w-[95%] p-2 m-2 rounded-md bg-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[95%] p-2 m-2 rounded-md bg-gray-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="px-2 m-2 text-red-600 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-[95%] text-lg p-2 m-2 rounded-md bg-rose-600 text-white"
        >
          Login
        </button>

        <button className="text-slate-50 m-2 font-semibold text-lg cursor-pointer">
          New to Todo App? Sign up now
        </button>
      </form>
    </div>
  );
};

export default Login;
