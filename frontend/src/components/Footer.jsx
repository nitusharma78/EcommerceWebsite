import React from "react";

const Footer = () => {
    return (
        <footer className="pt-16 pb-8 text-white bg-gray-900">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h2 className="mb-4 text-2xl font-bold tracking-wider text-pink-500">
                            MYNTRA
                        </h2>
                        <p className="mb-4 text-sm text-gray-400">
                            Your one-stop destination for fashion, lifestyle, and trends. Shop
                            the latest collections today.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons (Placeholders) */}
                            <div className="flex items-center justify-center w-10 h-10 transition bg-gray-800 rounded-full cursor-pointer hover:bg-pink-600">
                                <span className="text-sm material-symbols-outlined">group</span>
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 transition bg-gray-800 rounded-full cursor-pointer hover:bg-pink-600">
                                <span className="text-sm material-symbols-outlined">photo_camera</span>
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 transition bg-gray-800 rounded-full cursor-pointer hover:bg-pink-600">
                                <span className="text-sm material-symbols-outlined">alternate_email</span>
                            </div>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Online Shopping</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="cursor-pointer hover:text-pink-500">Men</li>
                            <li className="cursor-pointer hover:text-pink-500">Women</li>
                            <li className="cursor-pointer hover:text-pink-500">Kids</li>
                            <li className="cursor-pointer hover:text-pink-500">Home & Living</li>
                            <li className="cursor-pointer hover:text-pink-500">Beauty</li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Customer Policies</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="cursor-pointer hover:text-pink-500">Contact Us</li>
                            <li className="cursor-pointer hover:text-pink-500">FAQ</li>
                            <li className="cursor-pointer hover:text-pink-500">T&C</li>
                            <li className="cursor-pointer hover:text-pink-500">Terms Of Use</li>
                            <li className="cursor-pointer hover:text-pink-500">Track Orders</li>
                        </ul>
                    </div>

                    {/* App Download / Newsletter */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Experience Myntra App on Mobile</h3>
                        <div className="flex gap-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 cursor-pointer" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer" />
                        </div>

                        <div className="mt-8">
                            <h3 className="mb-2 text-sm font-semibold text-gray-300">Keep up to date</h3>
                            <div className="flex">
                                <input type="email" placeholder="Enter Email" className="w-full px-3 py-2 text-sm text-gray-900 bg-white rounded-l-md focus:outline-none" />
                                <button className="px-4 py-2 text-sm font-bold text-white uppercase bg-pink-600 rounded-r-md hover:bg-pink-700">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 mt-12 text-sm text-center text-gray-500 border-t border-gray-800">
                    <p>&copy; 2026 Myntra Clone. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;