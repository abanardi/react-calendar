/** @format */

import React from 'react';
import Day from './Day';

const DayPanel = () => {
  return (
    <div className="day-panel">
      <p className="day-name">Sun</p>
      <p className="day-name">Mon</p>
      <p className="day-name">Tue</p>
      <p className="day-name">Wed</p>
      <p className="day-name">Thu</p>
      <p className="day-name">Fri</p>
      <p className="day-name">Sat</p>
      <Day date="15" today={true} eventToday={true} />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day eventToday={true} />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </div>
  );
};

export default DayPanel;
