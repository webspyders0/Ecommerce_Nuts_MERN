import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import backgroundImage from '../../assets/images/nuts.webp'; // Import the image

export default function RegisterPage() {
    return (
        <>
            <Helmet>
                <title>Register - Your Website Name</title>
            </Helmet>

            <div className="min-h-screen bg-amber-50 flex flex-col justify-center items-center p-4 relative">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${backgroundImage})` }}></div>

                <div className="w-full max-w-md relative z-10">
                    <div className="text-center mb-8">
                        <svg className="inline-block w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <h1 className="text-3xl font-bold mt-2 text-amber-800">NUTTY</h1>
                        <p className="text-amber-800 mt-1">Dry Fruits & Nuts Emporium</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-2xl font-semibold text-center mb-6 text-amber-800">Create Account</h2>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-amber-800">Full Name</label>
                                    <div className="relative">
                                        <input id="name" type="text" placeholder="Your Name" className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 pl-10" />
                                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-amber-800">Email</label>
                                    <div className="relative">
                                        <input id="email" type="email" placeholder="you@gmail.com" className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 pl-10" />
                                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-amber-800">Password</label>
                                    <div className="relative">
                                        <input id="password" type="password" placeholder="••••••••" className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 pl-10" />
                                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                                    Create Account
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="px-8 py-4 bg-amber-100 text-center">
                        <p className="text-sm text-amber-800">
                            Already have an account?
                            <Link to="/login" className="ml-1 font-semibold text-amber-600 hover:underline focus:outline-none">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-amber-800">Discover Nature's Finest Selection</p>
                    <div className="flex justify-center mt-2 space-x-2">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors duration-300" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="fixed bottom-4 left-4 right-4 flex justify-between text-amber-800">
                <Link to="/" className="text-amber-800 hover:text-amber-600 focus:outline-none transition duration-300">
                    <svg className="inline-block mr-2" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Home
                </Link>
                <Link to="/shop" className="text-amber-800 hover:text-amber-600 focus:outline-none transition duration-300">
                    Shop Now
                    <svg className="inline-block ml-2" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
         </div >
        </>
    );
}
