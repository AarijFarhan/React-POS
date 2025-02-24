import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import Cookies from "js-cookie"



const Login = () => {



  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate()




  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          autoComplete="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Login
        </button>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
