'use client';

import React, { useState } from 'react';
import { FaTachometerAlt, FaProjectDiagram, FaUsers } from 'react-icons/fa';
import Image from 'next/image';
import LoginModal from './login';

const Hero = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleOpenModal = () => {
        setShowLoginModal(true);
    };

    const handleCloseModal = () => {
        setShowLoginModal(false);
    };

    return (
        <section className="relative bg-white text-gray-800 min-h-screen flex items-center justify-center px-12 py-12">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:space-x-6">
                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left space-y-6 mb-8 lg:mb-0">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-gray-900">
                        Welcome to <span className="text-blue-600">FlowBoard</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                        Effortlessly manage your tasks with real-time updates and collaborative dashboards designed for your team’s productivity.
                    </p>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-center space-x-2">
                            <FaTachometerAlt className="text-blue-600 w-5 h-5" />
                            <span>Real-time task tracking</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaProjectDiagram className="text-blue-600 w-5 h-5" />
                            <span>Collaborate on shared dashboards</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaUsers className="text-blue-600 w-5 h-5" />
                            <span>Manage multiple projects</span>
                        </li>
                    </ul>

                    {/* Call to Action */}
                    <div className="mt-6">
                        <button
                            onClick={handleOpenModal}
                            className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative max-w-lg lg:max-w-sm w-full mb-8 lg:mb-0">
                    <Image
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="FlowBoard Dashboard Mockup"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Login Modal */}
            {showLoginModal && <LoginModal onClose={handleCloseModal} />}
        </section>
    );
};

export default Hero;
