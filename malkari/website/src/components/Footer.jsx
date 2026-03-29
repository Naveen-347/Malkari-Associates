import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 font-display">
                            Malkari <br />
                            <span className="text-secondary-500">& Associates</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Dedicated to professional excellence and integrity in financial services. Your trusted partner for growth, compliance, and strategic financial planning.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-secondary-400 transition-colors flex items-center w-max">Home</a></li>
                            <li><a href="#services" className="hover:text-secondary-400 transition-colors flex items-center w-max">Services</a></li>
                            <li><a href="#contact" className="hover:text-secondary-400 transition-colors flex items-center w-max">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
                        <div className="space-y-3">
                            <p className="text-gray-400 text-sm">25/114 old town ,</p>
                            <p className="text-gray-400 text-sm">vadlabanda street old town Anantapur, Andhra Pradesh 515001, India</p>
                            <p className="text-gray-400 text-sm mt-4 font-semibold text-white">+91 9849274215</p>
                            <p className="text-gray-400 text-sm">venkat.malkari@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Malkari & Associates. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors text-white"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
