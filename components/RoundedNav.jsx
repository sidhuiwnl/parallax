import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function RoundedNav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ 
                y: 0,
                backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'
            }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-1/2 rounded-full transform -translate-x-1/2 z-50 w-[100%] max-w-5xl"
        >
            <div className="mx-auto px-6 py-3 rounded-full backdrop-blur-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <a href="#" className="text-white font-medium hover:text-[#fa6e43] transition-colors">
                            Home
                        </a>
                        <a href="#" className="text-white font-medium hover:text-[#fa6e43] transition-colors">
                            Who Are We
                        </a>
                        <a href="#" className="text-white font-medium hover:text-[#fa6e43] transition-colors">
                            Our Services
                        </a>
                        <a href="#" className="text-white font-medium hover:text-[#fa6e43] transition-colors">
                            What We Care
                        </a>
                         <a href="#" className="text-white font-medium hover:text-[#fa6e43] transition-colors">
                            Career
                        </a>
                         <a href="#" className="text-white font-medium hover:text-[#fa6e43] transition-colors">
                            Blog
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                       
                        <button className="px-4 py-2 bg-[#fa6e43] text-white rounded-full hover:bg-[#e55d34] transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
