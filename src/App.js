import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Booking from './components/booking';
import { BookingTimesProvider } from './components/bookingTimesContext'; // Import the provider

function App() {
  return (
    <BookingTimesProvider> {/* Wrap your app in the provider */}
      <div className="page-container">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BookingTimesProvider>
  );
}

export default App;
