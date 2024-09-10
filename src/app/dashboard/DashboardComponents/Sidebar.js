'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

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
        <div className="w-64 bg-blue-600 text-white h-full flex flex-col justify-between p-6">
            {/* Sidebar Header */}
            <div>
                <h2 className="text-2xl font-bold mb-6">FlowBoard</h2>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <a href="/dashboard" className="text-lg hover:text-yellow-400">Dashboard</a>
                        </li>
                        <li className="mb-4">
                            <a href="/profile" className="text-lg hover:text-yellow-400">Profile</a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
            >
                Logout
            </button>
        </div>
    );
};

export default Sidebar;
