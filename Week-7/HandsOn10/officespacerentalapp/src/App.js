import React from 'react';
import './App.css';
import officeImage from './office.jpg'; // cn use different images for each office (will do that in real scenario)

function App() {
  const heading = "Office Space";

  const offices = [
    { name: "DBS", rent: 50000, address: "Chennai" },
    { name: "WeWork", rent: 75000, address: "Bangalore" },
    { name: "Cowrks", rent: 65000, address: "Hyderabad" },
    { name: "SmartWorks", rent: 45000, address: "Pune" },
    { name: "91Springboard", rent: 90000, address: "Mumbai" }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{heading}, at Affordable Range</h1>

      {offices.map((office, index) => {
        const rentClass = office.rent <= 60000 ? "textRed" : "textGreen";

        return (
          <div key={index} style={{ marginTop: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <img
              src={officeImage}
              alt="Office"
              width="30%"
              style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            />
            <h2>Office Name: {office.name}</h2>
            <h3 className={rentClass}>Rent: Rs. {office.rent}</h3>
            <h3>Address: {office.address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
