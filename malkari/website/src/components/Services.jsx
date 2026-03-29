import React from 'react';
import {
    FileText,
    Briefcase,
    ShieldCheck,
    TrendingUp,
    BarChart,
    DollarSign,
    Globe,
    Users,
    Building
} from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
    {
        title: "Audit & Assurance",
        icon: <ShieldCheck size={32} />,
        items: ["Statutory Audits", "Tax Audits", "Certification", "Special Purpose Audits"]
    },
    {
        title: "Private Client Solutions",
        icon: <Users size={32} />,
        items: ["Family Trust structures", "Taxation for HNIs", "Estate Planning", "Succession planning"]
    },
    {
        title: "Company Secretarial",
        icon: <Building size={32} />,
        items: ["Company Setup", "LLP Setup", "FEMA Compliance", "Mergers & Acquisitions"]
    },
    {
        title: "Transaction Advisory",
        icon: <TrendingUp size={32} />,
        items: ["Due Diligence", "Valuations", "Investment Banking Support", "Structure Design"]
    },
    {
        title: "Risk Management",
        icon: <BarChart size={32} />,
        items: ["Internal Audit", "Risk Assessment", "Process Automation", "Corporate Governance"]
    },
    {
        title: "Taxation",
        icon: <DollarSign size={32} />,
        items: ["Tax computation", "Tax Advisory", "International Taxation", "Transfer Pricing"]
    },
    {
        title: "GST",
        icon: <FileText size={32} />,
        items: ["Registrations", "Filing Returns", "GST Audit", "Refund Assistance"]
    },
    {
        title: "Business Registrations",
        icon: <Briefcase size={32} />,
        items: ["PAN & TAN", "PF & ESI", "IEC Registration", "Shops & Establishments"]
    },
    {
        title: "Indirect Tax",
        icon: <Globe size={32} />,
        items: ["Pan-India compliance", "EOUs/STPs/SEZ", "Customs Law", "Litigation support"]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gray-50 relative">
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-100/50 text-error-600 mb-4"
                    >
                        <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Our Expertise</span>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-2 text-4xl leading-8 font-bold tracking-tight text-gray-900 sm:text-5xl font-display"
                    >
                        Professional Services
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 max-w-2xl text-xl text-gray-500 mx-auto"
                    >
                        Comprehensive financial, legal, and advisory solutions tailored to your business needs.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-xl text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{service.title}</h4>
                                <div className="flex-grow">
                                    <ul className="space-y-3">
                                        {service.items.map((subItem, idx) => (
                                            <li key={idx} className="flex items-start text-gray-600 text-sm">
                                                <span className="mr-2 text-secondary-500 mt-1">•</span>
                                                {subItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
