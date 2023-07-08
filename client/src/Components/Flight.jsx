import "./Flight.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Flight = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState("");
  
  


  const supportedFromCities = [
    "Mumbai",
    "Ahmedabad",
    "Pune",
    "Hyderabad",
    "Chennai",
  ];
  const supportedToCities = [
    "Pune", 
    "Kolkata", 
    "Delhi", 
    "Mumbai", 
    "Chennai",
  ];


const handleFromChange = (event) => {
    const inputValue = event.target.value;
    setFrom(inputValue);
    if (!supportedFromCities.includes(inputValue)) {
      setError('We do not serve these cities yet');
    } else if (inputValue === to) {
      setError('From and To cannot be the same');
    } else {
      setError('');
    }
};

const handleToChange = (event) => {
    const inputValue = event.target.value;
    setTo(inputValue);
    if (!supportedToCities.includes(inputValue)) {
      setError('We do not serve these cities yet');
    } else if (inputValue === from) {
      setError('From and To cannot be the same');
    } else {
      setError('');
    }
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  
  const handleSearch = () => {
    setError('We are full right now for the selected options, please try after sometime.');
  };



  return (
    <>
      <div className="inputContainer">
        <div className="inputTags">
          <label htmlFor="from">From</label>
          <br />
          <input
            type="text"
            placeholder="Departing from"
            id="from"
            value={from}
            onChange={handleFromChange}
          />
        </div>

        <div className="inputTags">
          <label htmlFor="to">To</label>
          <br />
          <input type="text" placeholder="Arriving at" id="to" value={to} onChange={handleToChange} />
        </div>

        <div className="inputTags">
          <label htmlFor="travelDate">Travel Date:</label>
          <br />
          <DatePicker
            placeholder="Travel date"
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            placeholderText="Select a date"
          />
        </div>
      </div>
      <div className="errorMessage">{error && <p>{error}</p>}</div>
      <div className="searchButtonBox">
      <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
};


export default Flight;
