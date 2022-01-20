/** @format */

import React from 'react';

const Day = ({
  date,
  currentMonth,
  eventToday,
  selected,
  today,
  setSelectedIndex,
  selectedIndex,
  setVisible,
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
  // console.log('Date', date);
  // console.log('SelectedIndex', selectedIndex);

  return (
    <div
      className={conditions}
      onClick={
        currentMonth && date === selectedIndex
          ? () => {
              setSelectedIndex(null);
              setVisible(false);
            }
          : currentMonth
          ? () => {
              setSelectedIndex(date);
              setVisible(true);
            }
          : null
      }
    >
      <p className={currentMonth ? 'number' : 'number other-month'}>{date}</p>
    </div>
  );
};

export default Day;
