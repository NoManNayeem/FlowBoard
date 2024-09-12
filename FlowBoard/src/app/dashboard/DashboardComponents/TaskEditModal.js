'use client';

import React from 'react';

export default function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-lg p-6 sm:p-8 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 focus:outline-none"
                    aria-label="Close Modal"
                >
                    &times;
                </button>

                {/* Modal Content */}
                <div className="flex flex-col gap-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
