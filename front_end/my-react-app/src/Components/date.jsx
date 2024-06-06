import React from 'react';
import ReactDOM from 'react-dom/client';

function DisplayDate() {
  
  const date = new Date();
  const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September",  "October", "November", "December"
    ];

  const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    return (
      <div className="dateContainer">
      <div className="dateLeft">
      <p className="dateP">{date.getDate()}</p>
      <p className="dayP">{days[date.getDay()]}</p>
      </div>
      <div className="dateRight">
      <p className="monthsP">{months[date.getMonth()]}</p>
      <p className="yearP">{date.getFullYear()}</p>
      </div>
      </div>
    );
  }
  
  export default DisplayDate;