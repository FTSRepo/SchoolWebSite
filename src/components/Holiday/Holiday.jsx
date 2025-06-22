// src/components/AcademicContent.js

import React, { useState } from 'react'; // useState hook import karein

const AcademicContent = () => {

  // State to manage visible calendar events
  const [showAllEvents, setShowAllEvents] = useState(false);

  const academicCalendar = [
    { month: 'May', event: 'Summer Vacation Begins', type: 'holiday' },
    { month: 'May', event: 'Summer Vacation Begins', type: 'holiday' },
    { month: 'June', event: 'School Reopens after Summer Vacation', type: 'event' },
    { month: 'June', event: 'Unit Test - I', type: 'exam' },
    { month: 'July', event: 'Parent-Teacher Meeting (PTM)', type: 'event' },
    { month: 'August', event: 'Independence Day (Holiday)', type: 'holiday' },
    { month: 'September', event: 'Mid-Term Examinations', type: 'exam' },
    { month: 'October', event: 'Dussehra Holidays', type: 'holiday' },
    { month: 'November', event: 'Diwali Holidays', type: 'holiday' },
    { month: 'December', event: 'Annual Sports Day', type: 'event' },
    { month: 'December', event: 'Winter Break Begins', type: 'holiday' },
    { month: 'January', event: 'Winter Break Ends, School Reopens', type: 'event' },
    { month: 'January', event: 'Republic Day (Holiday)', type: 'holiday' },
    { month: 'February', event: 'Pre-Board Examinations (X & XII)', type: 'exam' },
    { month: 'March', event: 'Final Examinations (All Classes)', type: 'exam' },
    { month: 'March', event: 'Holi (Holiday)', type: 'holiday' },
    { month: 'April', event: 'New Academic Session Begins', type: 'event' },
  ];

  // Current month ko dynamically get karne ke liye
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  // Filter events for the current month
  const currentMonthEvents = academicCalendar.filter(item => item.month === currentMonth);

  // Determine which events to display based on showAllEvents state
  const eventsToDisplay = showAllEvents ? academicCalendar : currentMonthEvents;


  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Academic Calendar & Important Dates</h2>
        <p className="text-gray-600 mb-10">
          Plan ahead with our key academic dates, holidays, and examination schedules.
        </p>

        {currentMonthEvents.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-700">Events for {currentMonth}</h3>
          </div>
        )}

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eventsToDisplay.length > 0 ? (
            eventsToDisplay.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white border-l-4 ${item.type === 'holiday'
                  ? 'border-red-400'
                  : item.type === 'exam'
                    ? 'border-yellow-400'
                    : 'border-blue-400'
                  }`}
              >
                <div className="text-sm text-gray-500 mb-1">{item.month}</div>
                <div className="text-lg font-medium text-gray-800">{item.event}</div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              No major events scheduled for {currentMonth} yet. Stay tuned!
            </p>
          )}
        </div>

        {/* Note & CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-4">
            *Exact dates for examinations and other events will be communicated through school notices.
          </p>
          {academicCalendar.length > currentMonthEvents.length && (
            <button
              onClick={() => setShowAllEvents(!showAllEvents)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              {showAllEvents ? 'Show Less' : 'View All Upcoming Dates'}
            </button>
          )}
        </div>
      </div>
    </section>

  );
};
export default AcademicContent;