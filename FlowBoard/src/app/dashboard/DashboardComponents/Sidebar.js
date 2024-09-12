'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';
import { FaTachometerAlt, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Import icons

const Sidebar = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Remove token and user type cookies
        deleteCookie('token');
        deleteCookie('usertype');

        // Redirect to the homepage
        router.push('/');
    };

    return (
        <div className="w-64 bg-gradient-to-r from-blue-700 to-indigo-700 text-white h-full flex flex-col justify-between p-6 shadow-lg">
            {/* Sidebar Header */}
            <div>
                <h2 className="text-3xl font-bold mb-6 tracking-wide">FlowBoard</h2>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <a href="/dashboard" className="flex items-center text-lg hover:text-yellow-400 transition-colors duration-300">
                                <FaTachometerAlt className="mr-3" />
                                Dashboard
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="/profile" className="flex items-center text-lg hover:text-yellow-400 transition-colors duration-300">
                                <FaUserCircle className="mr-3" />
                                Profile
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
                <FaSignOutAlt className="mr-2" />
                Logout
            </button>
        </div>
    );
};

export default Sidebar;
