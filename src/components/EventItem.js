/** @format */

import React from 'react';
import { FaTimes } from 'react-icons/fa';
const EventItem = ({ innerText, time, complete }) => {
  return (
    <div>
      <div className="time-delete">
        <p className={!complete ? 'event-time' : 'event-time complete'}>
          {time}
        </p>
        <FaTimes className="delete-event" />
      </div>
      <p className={!complete ? 'event-text' : 'event-text complete'}>
        {innerText}
      </p>
    </div>
  );
};

export default EventItem;
