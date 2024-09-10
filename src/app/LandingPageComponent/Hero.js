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
        <section className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white min-h-screen flex items-center justify-center px-4 py-16">
            <div className="container mx-auto flex flex-col items-center text-center lg:text-left">
                {/* Text Section */}
                <div className="max-w-3xl space-y-6 mb-12">
                    <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                        Welcome to <span className="text-yellow-400">FlowBoard!</span>
                    </h1>
                    <p className="text-lg text-gray-100 leading-relaxed">
                        Effortlessly Manage Your Tasks with real-time updates and collaborative dashboards to help you keep track of your team’s progress.
                    </p>
                    <ul className="space-y-4 text-gray-200">
                        <li className="flex justify-center lg:justify-start items-center space-x-3">
                            <FaTachometerAlt className="text-yellow-400" />
                            <span>Real-time task tracking and progress updates</span>
                        </li>
                        <li className="flex justify-center lg:justify-start items-center space-x-3">
                            <FaProjectDiagram className="text-yellow-400" />
                            <span>Collaborate with your team on shared dashboards</span>
                        </li>
                        <li className="flex justify-center lg:justify-start items-center space-x-3">
                            <FaUsers className="text-yellow-400" />
                            <span>Manage multiple projects in one platform</span>
                        </li>
                    </ul>

                    {/* Call to Action Button */}
                    <button
                        onClick={handleOpenModal}
                        className="mt-8 inline-block bg-yellow-400 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-500 hover:shadow-2xl"
                    >
                        Get Started Now
                    </button>
                </div>

                {/* Image Section */}
                <div className="relative max-w-lg w-full lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2">
                    <Image
                        src="https://images.unsplash.com/photo-1678846851706-abb02d1574aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="FlowBoard Dashboard Mockup"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover drop-shadow-xl rounded-lg"
                    />
                </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform scale-110"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl transform scale-75"></div>
            </div>

            {/* Login Modal */}
            {showLoginModal && <LoginModal onClose={handleCloseModal} />}
        </section>
    );
};

export default Hero;
