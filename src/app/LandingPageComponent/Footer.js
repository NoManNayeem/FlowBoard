import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <Link href="https://medium.com/@nomannayeem" passHref className="hover:text-blue-500 cursor-pointer"><FaFacebook size={24} />
                    </Link>
                    <Link href="https://github.com/NoManNayeem/" passHref className="hover:text-blue-400 cursor-pointer"><FaTwitter size={24} />
                    </Link>
                    <Link href="https://linkedin.com/in/nayeemislam60053/" passHref className="hover:text-blue-300 cursor-pointer"><FaLinkedin size={24} />
                    </Link>
                </div>
                <p className="text-sm">© 2024 FlowBoard. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
