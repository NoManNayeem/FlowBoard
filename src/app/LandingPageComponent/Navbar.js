import React from 'react';
import { FaTasks } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <FaTasks size={30} className="text-white mr-3" />
                    <span className="text-3xl font-extrabold tracking-wide">
                        FlowBoard
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
