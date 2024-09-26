import React from "react";
import useDatePickerStore from "../store/datePickerStore";

const RecurrenceComponent = () => {
  const {
    startDate,
    recurrenceDates,
    setStartDate,
    setRecurrence,
    setInterval,
  } = useDatePickerStore();

  // Handle start date change
  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setStartDate(date);
  };

  // Handle recurrence type change (daily, weekly, monthly, yearly)
  const handleRecurrenceChange = (event) => {
    const pattern = event.target.value;
    setRecurrence({ pattern, interval: 1 });
  };

  // Handle interval change (every X days/weeks/months/years)
  const handleIntervalChange = (event) => {
    const interval = parseInt(event.target.value, 10);
    setInterval(interval);
  };

  return (
    <div>
      <div>
        <h2>Select a Start Date and Recurrence</h2>
        {/* Start Date Selector */}
        <input type="date" onChange={handleDateChange} />
      </div>

      {/* Recurrence Type Selector */}
      <div>
        <label>Recurrence Type: </label>
        <select onChange={handleRecurrenceChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Interval Selector */}
      <div>
        <label>Interval (every X days/weeks/months/years): </label>
        <input type="number" min="1" onChange={handleIntervalChange} />
      </div>

      {/* Recurrence Dates Display */}
      <div>
        <h3>Recurrence Dates:</h3>
        <ul>
          {recurrenceDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecurrenceComponent;
