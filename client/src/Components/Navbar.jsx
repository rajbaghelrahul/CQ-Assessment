import React, { useState } from "react";
import "./Navbar.css";
import Flight from "./Flight";
import Rental from "./Rental";
import Hotel from "./Hotel";
import { MdFlight } from 'react-icons/md';
import { RiHotelBedFill } from 'react-icons/ri';
import { BiSolidCar } from 'react-icons/bi';


const Navbar = () => {
  const [activeTab, setActiveTab] = useState("flight");
  const [isBookingInProgress, setBookingInProgress] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (isBookingInProgress) {
      const confirmExit = window.confirm("Are you sure you want to exit?");
      if (confirmExit) {
        setActiveTab(tab);
      }
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div className="navbar">
        <div
          className={`navbarTab ${activeTab === "flight" ? "active" : ""}`}
          onClick={() => handleTabChange("flight")}
        >
          <MdFlight style={{ margin: '0px 10px' }} />
          Flight
        </div>
        <div
          className={`navbarTab ${activeTab === "hotel" ? "active" : ""}`}
          onClick={() => handleTabChange("hotel")}
        >
          <RiHotelBedFill style={{ margin: '0px 10px' }} />
          Hotel
        </div>
        <div
          className={`navbarTab ${activeTab === "rental" ? "active" : ""}`}
          onClick={() => handleTabChange("rental")}
        >
          <BiSolidCar style={{ margin: '0px 10px' }} />
          Rental
        </div>
      </div>
      {activeTab === "flight" && <Flight />}
      {activeTab === "hotel" && <Hotel />}
      {activeTab === "rental" && <Rental />}
    </>
  );
};

export default Navbar;
