/** @format */

import React from 'react';

const Day = ({
  date,
  currentMonth,
  eventToday,
  selected,
  today,
  setSelectedIndex,
}) => {
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
    <div
      className={conditions}
      onClick={
        currentMonth
          ? () => {
              setSelectedIndex(date);
            }
          : null
      }
    >
      <p className={currentMonth ? 'number' : 'number other-month'}>{date}</p>
    </div>
  );
};

export default Day;
