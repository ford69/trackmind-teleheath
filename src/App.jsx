import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Conditions from './pages/Conditions';
import ConditionDetail from './pages/ConditionDetail';
import Resources from './pages/Resources';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/conditions/:slug" element={<ConditionDetail />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;