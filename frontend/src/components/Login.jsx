import React from "react";
import { useState } from "react";
import { login } from "../api/auth";


const Login = ({ close, openRegister }) => {


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(formData); // API Call
      console.log("Login response:", response.data);

      // Token save
      localStorage.setItem("token", response.data.token);

      //Redirect or state update
      alert("Login successful");
      // navigate("/Home");


    } catch (err) {
      console.log("Login error:", err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-200/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-8 overflow-hidden border shadow-2xl bg-white/30 rounded-3xl backdrop-blur-md border-white/40 ring-1 ring-black/5">

        {/* Close Button */}
        <button
          onClick={close}
          className="absolute p-1 text-gray-500 transition-colors duration-200 rounded-full top-4 right-4 hover:bg-white/40 hover:text-gray-800 focus:outline-none"
        >
          <span className="text-xl material-symbols-outlined">close</span>
        </button>

        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-800">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to continue
          </p>
        </div>

        {error && <p className="mb-2 text-red-500">{error}</p>}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative group">
            <label className="block mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 text-gray-700 placeholder-gray-400 transition border border-gray-200 lg:text-sm bg-white/50 rounded-xl focus:border-red-400 focus:ring-4 focus:ring-red-400/20 focus:outline-none"
              />
              <span className="absolute right-3 top-3 text-gray-400 material-symbols-outlined text-[20px]">
                mail
              </span>
            </div>
          </div>

          {/* Password */}
          <div className="relative group">
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold tracking-wide text-gray-600 uppercase">
                Password
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 text-gray-700 placeholder-gray-400 transition border border-gray-200 lg:text-sm bg-white/50 rounded-xl focus:border-red-400 focus:ring-4 focus:ring-red-400/20 focus:outline-none"
              />
              <span className="absolute right-3 top-3 text-gray-400 material-symbols-outlined text-[20px]">
                lock
              </span>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400" />
              <span>Remember me</span>
            </label>
            <a href="#" className="font-medium text-red-500 transition-colors hover:text-red-600 hover:underline">
              Forgot password?
            </a>
          </div>


          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 font-bold text-white transition-all transform shadow-lg bg-gradient-to-r from-red-500 to-pink-600 rounded-xl hover:shadow-red-500/30 hover:-translate-y-0.5"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <span
            className="font-bold text-red-600 cursor-pointer hover:underline"
            onClick={() => {
              close();
              if (openRegister) openRegister();
            }}
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
