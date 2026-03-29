import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },

    { name: 'Contact', id: 'contact' },
  ];

  const handleMobileClick = (id) => {
    setIsOpen(false);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <h1
            className={`text-2xl font-bold transition-colors ${scrolled ? 'text-primary-900' : 'text-white'
              }`}
          >
            Malkari
            <span className="block text-sm md:inline md:text-2xl">
              {' '} & Associates
            </span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-md font-medium transition-colors relative group ${scrolled
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white/90 hover:text-white'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white absolute w-full shadow-xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-8 space-y-3">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileClick(item.id)}
                  className="block w-full text-left text-gray-800 hover:text-primary-600 px-4 py-3 text-lg font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
