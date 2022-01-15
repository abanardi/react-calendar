/** @format */

import React from 'react';
import Button from './Button';
import DayPanel from './DayPanel';

const CalendarPanel = ({ daysList, switchNext, switchPrevious, selectedMonth, selectedDate, setSelectedIndex }) => {
  
  return (
    <div className="container">
      <div className="month-panel">
        <Button className='previous-button' innerText="Previous" onClick={switchPrevious} />
        <div className="month-panel-center">
          <p className="month-title">{selectedMonth}</p>
          <p className="full-date">{selectedDate}</p>
        </div>
        <Button className='next-button' innerText="Next" onClick={switchNext} />
      </div>
      <DayPanel daysList={daysList} setSelectedIndex={setSelectedIndex} />
    </div>
  );
};

export default CalendarPanel;
