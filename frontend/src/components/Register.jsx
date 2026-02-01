import React from "react";

const Register = ({ close, openLogin }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-200/50 backdrop-blur-sm">
            <div className="relative w-full max-w-md p-8 overflow-hidden shadow-2xl bg-white/30 rounded-3xl backdrop-blur-md border border-white/40 ring-1 ring-black/5">

                {/* Close Button */}
                <button
                    onClick={close}
                    className="absolute top-4 right-4 p-1 text-gray-500 transition-colors duration-200 rounded-full hover:bg-white/40 hover:text-gray-800 focus:outline-none"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>

                {/* Title */}
                <div className="mb-6 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                        Create Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join us to get exclusive offers
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    {/* Name */}
                    <div className="relative group">
                        <label className="block mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            Full Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 text-gray-700 transition lg:text-sm placeholder-gray-400 bg-white/50 border border-gray-200 rounded-xl focus:border-red-400 focus:ring-4 focus:ring-red-400/20 focus:outline-none"
                            />
                            <span className="absolute right-3 top-3 text-gray-400 material-symbols-outlined text-[20px]">
                                person
                            </span>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="relative group">
                        <label className="block mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            Email Address
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full px-4 py-3 text-gray-700 transition lg:text-sm placeholder-gray-400 bg-white/50 border border-gray-200 rounded-xl focus:border-red-400 focus:ring-4 focus:ring-red-400/20 focus:outline-none"
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
                                placeholder="Create a password"
                                className="w-full px-4 py-3 text-gray-700 transition lg:text-sm placeholder-gray-400 bg-white/50 border border-gray-200 rounded-xl focus:border-red-400 focus:ring-4 focus:ring-red-400/20 focus:outline-none"
                            />
                            <span className="absolute right-3 top-3 text-gray-400 material-symbols-outlined text-[20px]">
                                lock
                            </span>
                        </div>
                    </div>


                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3.5 mt-2 font-bold text-white transition-all transform shadow-lg bg-gradient-to-r from-red-500 to-pink-600 rounded-xl hover:shadow-red-500/30 hover:-translate-y-0.5"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <span
                        className="font-bold text-red-600 cursor-pointer hover:underline"
                        onClick={() => {
                            close();
                            openLogin();
                        }}
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
