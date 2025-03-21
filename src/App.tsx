import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Tender from './pages/Tender';
import Contact from './pages/Contact';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import ScrollToTop from './components/ScrollToTop';
import TourCategory from './pages/TourCategory';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/tender" element={<Tender />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/category/:categorySlug" element={<TourCategory />} />
            <Route path="/tours/:tourSlug" element={<TourDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;