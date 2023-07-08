import React, { useState } from 'react';
import './Navbar.css';
import Flight from './Flight';
import Rental from './Rental';
import Hotel from './Hotel';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('flight');
  const [isBookingInProgress, setBookingInProgress] = useState(false);
  

  const handleTabChange = (tab) => {
    if (isBookingInProgress) {
      const confirmExit = window.confirm('Are you sure you want to exit?');
      if (confirmExit) {
        setActiveTab(tab);
      }
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="navbar">
      <div
        className={`navbarTab ${activeTab === 'flight' && <Flight />}`}
        onClick={() => handleTabChange('flight')}
      >
        Flight
      </div>
      <div
        className={`navbarTab ${activeTab === 'hotel' && <Hotel />}`}
        onClick={() => handleTabChange('hotel')}
      >
        Hotel
      </div>
      <div
        className={`navbarTab ${activeTab === 'rental' && <Rental />}`}
        onClick={() => handleTabChange('rental')}
      >
        Rental
      </div>
    </div>
  );
};

export default Navbar;