import { create } from "zustand";

// Helper function to calculate recurring dates
const calculateRecurrenceDates = (startDate, recurrence) => {
  const { pattern, interval, daysOfWeek, nthDay } = recurrence;
  const dates = [];
  let currentDate = new Date(startDate);

  if (!startDate) return dates;

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const addMonths = (date, months) => {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  };

  const addYears = (date, years) => {
    const result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
  };

  // Generate recurring dates based on the pattern and interval
  for (let i = 0; i < 10; i++) {
    // Example: show next 10 recurrence dates
    if (pattern === "daily") {
      currentDate = addDays(currentDate, interval);
    } else if (pattern === "weekly") {
      if (Array.isArray(daysOfWeek) && daysOfWeek.length > 0) {
        // Adjust to the nearest selected day of the week
        while (!daysOfWeek.includes(currentDate.getDay())) {
          currentDate = addDays(currentDate, 1);
        }
        currentDate = addDays(currentDate, 7 * interval);
      } else {
        currentDate = addDays(currentDate, 7 * interval);
      }
    } else if (pattern === "monthly") {
      if (nthDay) {
        // Calculate based on the nth weekday (e.g., second Tuesday)
        let tempDate = new Date(currentDate);
        tempDate.setDate(1); // Start at the beginning of the month
        let dayCount = 0;

        // Find the nth weekday
        while (tempDate.getMonth() === currentDate.getMonth()) {
          if (tempDate.getDay() === nthDay.weekday) {
            dayCount++;
            if (dayCount === nthDay.n) {
              currentDate = new Date(tempDate);
              break;
            }
          }
          tempDate = addDays(tempDate, 1);
        }
        currentDate = addMonths(currentDate, interval);
      } else {
        currentDate = addMonths(currentDate, interval);
      }
    } else if (pattern === "yearly") {
      currentDate = addYears(currentDate, interval);
    }

    dates.push(new Date(currentDate));
  }

  return dates;
};

const useDatePickerStore = create((set, get) => ({
  startDate: null,
  endDate: null,
  recurrence: {
    pattern: "daily", // default pattern
    interval: 1, // default interval
    daysOfWeek: [], // Array to store selected days of the week (for weekly recurrence)
    nthDay: null, // Store the nth weekday (e.g., { n: 2, weekday: 2 } for second Tuesday)
  },
  recurrenceDates: [], // store the recurrence dates

  setStartDate: (date) => {
    set({ startDate: date });
    const { recurrence } = get();
    set({ recurrenceDates: calculateRecurrenceDates(date, recurrence) });
  },

  setEndDate: (date) => set({ endDate: date }),

  setRecurrence: (recurrence) => {
    const { startDate } = get();
    set({ recurrence });
    if (startDate) {
      set({ recurrenceDates: calculateRecurrenceDates(startDate, recurrence) });
    }
  },

  setInterval: (interval) => {
    const { recurrence, startDate } = get();
    recurrence.interval = interval;
    set({ recurrence });
    if (startDate) {
      set({ recurrenceDates: calculateRecurrenceDates(startDate, recurrence) });
    }
  },

  setDaysOfWeek: (daysOfWeek) => {
    const { recurrence, startDate } = get();
    recurrence.daysOfWeek = daysOfWeek;
    set({ recurrence });
    if (startDate) {
      set({ recurrenceDates: calculateRecurrenceDates(startDate, recurrence) });
    }
  },

  setNthDay: (nthDay) => {
    const { recurrence, startDate } = get();
    recurrence.nthDay = nthDay;
    set({ recurrence });
    if (startDate) {
      set({ recurrenceDates: calculateRecurrenceDates(startDate, recurrence) });
    }
  },
}));

export default useDatePickerStore;
