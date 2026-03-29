import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
    {
        src: '/officeentrance.jpeg',
        title: 'Reception & Welcome Area',
        description: 'Our welcoming reception area where clients are greeted with professionalism.',
    },
    {
        src: '/officebanner.jpeg',
        title: 'Conference Room',
        description: 'A state-of-the-art meeting room for client consultations and team discussions.',
    },
    {
        src: '/ethi.jpeg',
        title: 'Work Space',
        description: 'Our collaborative workspace where our expert team delivers exceptional results.',
    },
    {
        src: '/office1.jpeg',
        title: 'Office Exterior',
        description: 'Our professional office premises in the heart of Proddatur.',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const photoItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Gallery = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goPrev = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const goNext = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % photos.length);
    };

    return (
        <section id="gallery" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-100/50 mb-4"
                    >
                        <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">
                            Our Premises
                        </span>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-2 text-4xl leading-8 font-bold tracking-tight text-gray-900 sm:text-5xl font-display"
                    >
                        Our Office
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 max-w-2xl text-xl text-gray-500 mx-auto"
                    >
                        A professional environment designed to deliver excellence in every client interaction.
                    </motion.p>
                </div>

                {/* Photo Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            variants={photoItem}
                            whileHover={{ y: -6, scale: 1.02 }}
                            onClick={() => openLightbox(index)}
                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                            style={{ aspectRatio: '4/3' }}
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                                <h4 className="text-white font-bold text-lg leading-tight">
                                    {photo.title}
                                </h4>
                                <p className="text-primary-200 text-sm mt-1 line-clamp-2">
                                    {photo.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={goPrev}
                            className="absolute left-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-4xl w-full mx-12 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={photos[lightboxIndex].src}
                                alt={photos[lightboxIndex].title}
                                className="w-full object-cover"
                            />
                            <div className="bg-primary-900 px-6 py-4">
                                <h4 className="text-white font-bold text-lg">
                                    {photos[lightboxIndex].title}
                                </h4>
                                <p className="text-primary-200 text-sm mt-1">
                                    {photos[lightboxIndex].description}
                                </p>
                            </div>
                        </motion.div>

                        {/* Next */}
                        <button
                            onClick={goNext}
                            className="absolute right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                        >
                            <ChevronRight size={28} />
                        </button>

                        {/* Dot indicators */}
                        <div className="absolute bottom-6 flex gap-2">
                            {photos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === lightboxIndex ? 'bg-white' : 'bg-white/40'}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
