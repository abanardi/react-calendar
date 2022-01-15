/** @format */

import React from 'react';

const Day = ({ date, currentMonth, eventToday, selected, today, onClick }) => {
  let conditions = 'container day';

  if (today) {
    conditions += ' today';
  }

  if (eventToday) {
    conditions += ' event-today';
  }

  if (selected) {
    conditions += ' selected';
  }

  return (
    <div className={conditions} onClick={onClick}>
      <p className={currentMonth ? 'number' : 'number other-month'}>{date}</p>
    </div>
  );
};

export default Day;
