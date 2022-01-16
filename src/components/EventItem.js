/** @format */

import React from 'react';
import {FaTimes} from 'react-icons/fa'
const EventItem = ({ innerText, time, complete }) => {
  return (
    <div>
      <div className='time-delete'>
            <p className="event-time">{time}</p>
            <FaTimes className='delete-event'/>
        </div>
      <p className="event-text">{innerText}</p>
    </div>
  );
};

export default EventItem;
