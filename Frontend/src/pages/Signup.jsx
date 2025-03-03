import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"


const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/signup", data);
      const token = response.data.token;
      if (token) {
        Cookies.set("token", token, {
          expires: 7, // Token expires in 7 days
          secure: false, // Use true in production (HTTPS)
          sameSite: "strict",
        });
    

      console.log("Sign Up Success:", response.data);
      alert(response.data.message);
      navigate('/login')
      }
      else{
        alert("No token Recieved")
      }

    } catch (error) {
      console.error("Sign Up Failed:", error);
      alert(error.response.data.message || "An error occurred while signing up");
    }
  };
  
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
          
            type="text"
            autoComplete="username"
            {...register("username", { required: "Username is required" })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
          autoComplete="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            autoComplete="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <button 
        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Sign Up
        </button>
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
