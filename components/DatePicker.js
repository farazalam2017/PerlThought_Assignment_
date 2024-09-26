"use client";
import React, { useState } from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import Calendar from "./Calendar";
import Preview from "./Preview";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrence, setRecurrence] = useState({
    pattern: "daily",
    interval: 1,
  });

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col gap-6 max-w-md mx-auto">
      <Calendar onDateChange={handleDateChange} />
      <RecurrenceOptions
        recurrence={recurrence}
        setRecurrence={setRecurrence}
      />
      <Preview
        startDate={startDate}
        endDate={endDate}
        recurrence={recurrence}
      />
    </div>
  );
};

export default DatePicker;
