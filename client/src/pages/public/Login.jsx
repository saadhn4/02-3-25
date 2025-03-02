import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form className="space-y-4">
        <label
          htmlFor="username"
          className="block text-gray-600 font-medium mb-1"
        >
          Username:
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <label
          htmlFor="username"
          className="block text-gray-600 font-medium mb-1"
        >
          Password:
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter Password"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <button className="bg-blue-500 font-bold rounded-lg p-3 cursor-pointer text-white ">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
