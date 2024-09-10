import React from 'react';
import { FaTasks } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <FaTasks size={28} className="mr-2" />
                    <span className="text-2xl font-bold">FlowBoard</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
