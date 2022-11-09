import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      navigate("/");
      setData({ email: "", password: "" });
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="w-screen  h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="bg-gray-200 rounded-lg shadow-gray-300 flex shadow-sm flex-col items-center   h-3/4 w-1/2 justify-center">
        <h1 className="m-4 text-2xl font-medium">Web Chat</h1>
        <h4 className="mb-4 ">Login</h4>
        <form onSubmit={handleSubmit} className="flex flex-col  w-2/4 gap-4">
          <input
            className="border-2 w-full border-gray-600 rounded-sm px-2 py-1"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="email"
          />
          <input
            className="border-2 border-gray-600 rounded-sm px-2 py-1"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
          />

          <button className="bg-gray-800 text-white px-8 py-1">Sign in</button>
        </form>
        <p className="my-4">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        <p className="text-red-600">{error}</p>
      </div>
    </div>
  );
}

export default Login;
