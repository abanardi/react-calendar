/** @format */

import React from 'react';
import Button from './Button';
import DayPanel from './DayPanel';

const CalendarPanel = ({ daysList, switchNext, switchPrevious, selectedMonth, selectedDate, selectDate }) => {
  
  return (
    <div className="container">
      <div className="month-panel">
        <Button innerText="Previous" onClick={switchPrevious} />
        <div className="month-panel-center">
          <p className="month-title">{selectedMonth}</p>
          <p className="full-date">{selectedDate}</p>
        </div>
        <Button innerText="Next" onClick={switchNext} />
      </div>
      <DayPanel daysList={daysList} selectDate={selectDate} />
    </div>
  );
};

export default CalendarPanel;
