# About Assignment

## What is a Date Picker?

A date picker is a user interface component where users can pick a date from a calendar. You've probably seen it when you're selecting a date to book a hotel or an appointment online.

## What are Recurring Dates?

Recurring dates are dates that repeat according to a pattern. For example:

- Daily: The user might select a date that repeats every day.
- Weekly: The user might select a date that repeats every week.
- Monthly: The user might select a date that repeats every month.

## What Does the Task Want You to Do?

- Build a reusable date picker: You will build this in React, so you can use it in other parts of the project.

- Allow recurring dates: Users should be able to choose not just one date, but dates that repeat on a schedule (daily, weekly, monthly, yearly).

## Customization

Users can customize the recurrence. For example, they can choose:

- Every X days, weeks, or months (e.g., every 3 days or every 2 weeks).
- Specific days of the week (e.g., every Monday and Thursday).
- Specific days in a month (e.g., the 2nd Tuesday of each month).

## Visual Preview

After the user picks the recurring dates, show them a preview of the selected dates in a mini-calendar or list format. This helps the user see the actual dates that will be selected based on their pattern.

## Date Range

The user should be able to select a start date and optionally an end date (for when the recurring dates should stop).

## Technical Requirements:

- Use Next.js: This is a framework that helps you build React applications easily.
- Use Tailwind CSS for styling: This will make your date picker look nice and modern.
- Use a state management library like Zustand, Jotai, or React Context API to manage the state (data) of the date picker.
- Key Features:
  - Date picker: The user can choose a date or a range of dates.
  - Recurrence options: The user can select how often the dates repeat (daily, weekly, monthly, etc.).
  - Preview: Show the user a preview of the recurring dates in a mini-calendar.
  - State management: Use one of the libraries to manage the state of the recurring dates.
  <hr/>
  This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
