import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Factory, Globe } from 'lucide-react';

const sectorsData = [
    {
        category: "Services",
        icon: <Layers size={24} />,
        items: [
            "Information Technology",
            "Banks",
            "Financial products and services",
            "Manpower services & consulting",
            "Hospitality",
            "Advertising & publicity",
            "Design firms",
            "Web-enabled services & e-commerce",
            "Media",
            "Architects & landscapers",
            "Health Services"
        ]
    },
    {
        category: "Manufacturing",
        icon: <Factory size={24} />,
        items: [
            "Electronics",
            "Engineering goods",
            "Gems and jewellery",
            "Textiles",
            "Consumer durables",
            "Garments",
            "Heavy vehicles",
            "Food processing",
            "Breweries & Distilleries",
            "Packaging",
            "Perfumery",
            "Pharmaceuticals",
            "Telecom Equipment",
            "Leather products"
        ]
    },
    {
        category: "Others",
        icon: <Globe size={24} />,
        items: [
            "Infrastructure",
            "Retail",
            "Educational Institutions",
            "Publishing",
            "Food Processing",
            "Plantations",
            "Clinical research",
            "Media",
            "Construction & land development",
            "R&D units",
            "Large public sector units",
            "Charities & Not for Profit"
        ]
    }
];

const Sectors = () => {
    return (
        <section className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary-400 font-semibold tracking-wide uppercase text-sm"> Industries We Serve </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary-900 font-display">Business Sectors</h2>
                    <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sectorsData.map((sector, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-primary-50/50 rounded-2xl p-8 border border-primary-100 hover:border-secondary-300 transition-colors duration-300 relative group"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-primary-900">
                                {sector.icon}
                            </div>

                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-primary-600">
                                    {sector.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary-900">{sector.category}</h3>
                            </div>

                            <ul className="space-y-2">
                                {sector.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                                        <span className="mr-2 text-secondary-500 font-bold">›</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sectors;
