/** @format */

import React from 'react';
import Button from './Button';
import DayPanel from './DayPanel';

const CalendarPanel = () => {
  return (
    <div className="container">
      <div className="month-panel">
        <Button />
        <div className="month-panel-center">
          <p>FEBRUARY</p>
          <p className="full-date">Saturday February 19, 2022</p>
        </div>
        <Button />
      </div>
      <DayPanel />
    </div>
  );
};

export default CalendarPanel;
