import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Sectors from './components/Sectors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        {/* <Gallery /> */}
        <Sectors />
        <Contact />
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
