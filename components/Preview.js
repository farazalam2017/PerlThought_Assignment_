"use client";
import React from "react";

const Preview = ({ startDate, endDate, recurrence }) => {
  if (!startDate || !recurrence) return null;

  const generateRecurringDates = () => {
    let dates = [];
    if (recurrence.pattern === "daily") {
      let currentDate = new Date(startDate);
      while (endDate && currentDate <= new Date(endDate)) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + recurrence.interval);
      }
    }
    return dates;
  };

  const recurringDates = generateRecurringDates();

  return (
    <div className="bg-gray-50 p-4 border rounded-lg mt-4 shadow-sm">
      <h3 className="text-lg font-bold mb-2">Recurring Dates:</h3>
      <ul className="list-disc ml-5">
        {recurringDates.map((date, index) => (
          <li key={index} className="text-gray-700">
            {date.toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Preview;
