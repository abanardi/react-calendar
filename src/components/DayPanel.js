/** @format */

import React from 'react';
import Day from './Day';

const DayPanel = ({ daysList, selectDate }) => {
  
  return (
    <div className="day-panel">
      <p className="day-name">Sun</p>
      <p className="day-name">Mon</p>
      <p className="day-name">Tue</p>
      <p className="day-name">Wed</p>
      <p className="day-name">Thu</p>
      <p className="day-name">Fri</p>
      <p className="day-name">Sat</p>

      {daysList.map((day) => (
        <Day
          date={day.date}
          currentMonth={day.currentMonth}
          eventToday={day.eventToday}
          selected={day.selected}
          today={day.today}
          onClick={day.currentMonth ? selectDate : null}
        />
      ))}
    </div>
  );
};

export default DayPanel;
