'use client';

import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const LoginModal = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy login logic: username is "Nayeem" and password is "password"
        if (username === 'Nayeem' && password === 'password') {
            // Set token and user type cookies
            const dummyToken = '12345abcdef';
            setCookie('token', dummyToken, { maxAge: 60 * 60 }); // 1 hour expiry
            setCookie('usertype', 'user', { maxAge: 60 * 60 }); // Example: set usertype as 'user'

            setIsLoggedIn(true);
            setErrorMessage('');

            // Redirect to dashboard
            router.push('/dashboard');
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg relative w-96">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <AiOutlineClose size={24} />
                </button>

                <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">Login</h2>
                <p className='text-green-800 mb-6'>Username: Nayeem || Password: password </p>
                        
                {isLoggedIn ? (
                    <div className="flex flex-col items-center">
                        <AiOutlineClose className="text-green-600 text-5xl mb-4" />
                        <p className="text-green-600 text-lg font-semibold">Logged in successfully!</p>
                    </div>
                ) : (
                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">Username</label>
                            <div className="flex items-center border border-gray-300 rounded-lg p-3">
                                <FaUser className="text-gray-400 mr-3" />
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full text-black border-none outline-none focus:ring-0"
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
                            <div className="flex items-center border border-gray-300 rounded-lg p-3">
                                <FaLock className="text-gray-400 mr-3" />
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full text-black border-none outline-none focus:ring-0"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>
                        {errorMessage && <p className="text-red-600 mb-4 text-sm text-center">{errorMessage}</p>}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
                        >
                            Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginModal;
