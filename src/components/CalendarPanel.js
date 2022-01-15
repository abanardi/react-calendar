/** @format */

import React from 'react';
import Button from './Button';
import DayPanel from './DayPanel';

const CalendarPanel = ({ daysList, switchNext, switchPrevious }) => {
  function test() {
    console.log('Clicked!');
  }
  return (
    <div className="container">
      <div className="month-panel">
        <Button innerText="Previous" onClick={switchPrevious} />
        <div className="month-panel-center">
          <p className="month-title">FEBRUARY</p>
          <p className="full-date">Saturday February 19, 2022</p>
        </div>
        <Button innerText="Next" onClick={switchNext} />
      </div>
      <DayPanel daysList={daysList} />
    </div>
  );
};

export default CalendarPanel;
