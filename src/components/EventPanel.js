/** @format */

import React from 'react';
import EventItem from './EventItem';

const EventPanel = ({visible}) => {
  return (
    <div className={visible ? "event-panel container " : "event-panel container invisible"} >
      <h1 className="event-date">1/15/22</h1>
      <div className="event-list">
        <EventItem innerText="Wake up" time="8:00 AM" />
        <EventItem innerText="Go to breakfast" time="9:25 AM" />
        <EventItem innerText="Skip Class" time="1:30 PM" />
        <EventItem innerText="Sleep" time="9:30 PM" />
      </div>
    </div>
  );
};

export default EventPanel;
