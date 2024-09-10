import React from 'react';
import Navbar from './LandingPageComponent/Navbar';
import Footer from './LandingPageComponent/Footer';
import Hero from './LandingPageComponent/Hero';

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Hero />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
