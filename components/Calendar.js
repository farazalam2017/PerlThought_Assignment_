"use client";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // React Calendar default styles

const CalendarComponent = ({ onDateChange }) => {
  const [dateRange, setDateRange] = useState([null, null]);

  const handleSelect = (range) => {
    setDateRange(range);
    onDateChange(range[0], range[1]);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <Calendar
        selectRange={true}
        onChange={handleSelect}
        value={dateRange}
        className="rounded-lg"
      />
    </div>
  );
};

export default CalendarComponent;
