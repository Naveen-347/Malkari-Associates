import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary-800/40 to-transparent clip-path-polygon"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
                        >
                            <span className="text-white font-semibold tracking-wide uppercase text-xs md:text-sm">
                                Malkari Venkata Rao
                            </span>
                            <br />
                            <span className="text-white font-semibold tracking-wide uppercase text-xs md:text-sm">
                                Malkari Manoj Kumar
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-display">
                            Excellence in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary-300">Financial Growth</span>
                        </h1>

                        <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-lg leading-relaxed">
                            We provide expert audit, taxation, and advisory services tailored to drive your business success with integrity and precision.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-primary-600 hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/30"
                            >
                                Get Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-semibold rounded-full text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                Our Services
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hidden md:block relative"
                    >
                        <div className="relative glass-card p-8 rounded-3xl border-t border-l border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-red-400/80"></div>
                            <div className="absolute top-4 right-10 w-4 h-4 rounded-full bg-yellow-400/80"></div>
                            <div className="absolute top-4 right-16 w-4 h-4 rounded-full bg-green-400/80"></div>

                            <div className="space-y-6 mt-6">
                                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                    <div className="h-2 bg-white/40 rounded w-1/3"></div>
                                    <div className="h-2 bg-secondary-400 rounded w-1/4"></div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                    <div className="h-2 bg-white/40 rounded w-1/2"></div>
                                    <div className="h-2 bg-green-400 rounded w-1/5"></div>
                                </div>
                                <div className="bg-gradient-to-r from-primary-600/30 to-secondary-500/30 h-40 rounded-xl border border-white/10 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-white mb-1">35+</div>
                                        <div className="text-xs text-primary-200 uppercase tracking-wider">Years Experience</div>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <div className="h-10 w-32 bg-primary-600 rounded-lg opacity-90"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
