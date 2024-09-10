'use client';

import React, { useState } from 'react';
import Sidebar from '../dashboard/DashboardComponents/Sidebar';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Social media icons

const ProfilePage = () => {
    // Dummy user data
    const [user] = useState({
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'A passionate developer and tech enthusiast. Currently exploring full-stack development and cloud technologies.',
        location: 'San Francisco, CA',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#',
            facebook: '#',
        }
    });

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Profile Content */}
            <div className="flex flex-col justify-center items-center w-full p-10">
                <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full text-center">
                    {/* Profile Avatar */}
                    <div className="mb-4">
                        <div className="relative rounded-full mx-auto border-4 border-indigo-500 object-cover w-24 h-24  rounded-full overflow-hidden shadow-lg mb-8 hover:scale-105 transition-all duration-500 cursor-pointer">
            
                            <Image
                                src={user.avatar}
                                alt="Picture of the Engineer"
                                fill
                                objectFit="cover"
                            />
                        </div>
                    </div>


                    {/* Profile Information */}
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">{user.name}</h1>
                    <p className="text-gray-500">{user.location}</p>
                    <p className="text-gray-600 mt-4">{user.email}</p>
                    <p className="text-gray-700 mt-4 mb-6">{user.bio}</p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-4 mb-6">
                        <a href={user.social.facebook} className="text-blue-600 hover:text-blue-700">
                            <FaFacebookF size={24} />
                        </a>
                        <a href={user.social.twitter} className="text-blue-400 hover:text-blue-500">
                            <FaTwitter size={24} />
                        </a>
                        <a href={user.social.linkedin} className="text-blue-700 hover:text-blue-800">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a href={user.social.github} className="text-gray-800 hover:text-gray-900">
                            <FaGithub size={24} />
                        </a>
                    </div>

                    {/* Edit Profile Button */}
                    <button
                        className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-md"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
