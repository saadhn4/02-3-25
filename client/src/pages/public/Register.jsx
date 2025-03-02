import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let apiUrl = "http://localhost:5001/api/public/register";
      let response = await axios.post(apiUrl, formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-300">
        <div className="bg-white p-7 w-[500px] rounded-lg">
          <h1 className="mb-10 text-center text-2xl">Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="block mb-5 w-full p-2 border border-gray-300  rounded-lg"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
            <input
              className="block mb-5 w-full p-2 border border-gray-300  rounded-lg"
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              value={formData.phone}
              onChange={handleChange}
              name="phone"
              placeholder="Enter phone"
              className="block mb-5 w-full p-2 border border-gray-300  rounded-lg"
            />
            <input
              className="block mb-5 w-full p-2 border border-gray-300  rounded-lg"
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <input
              className="block mb-5 w-full p-2 border border-gray-300 rounded-lg"
              type="number"
              value={formData.age}
              onChange={handleChange}
              name="age"
              id="age"
              placeholder="Age"
            />
            <button
              className="bg-blue-500 text-white font-bold rounded-lg p-3 cursor-pointer hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
