/** @format */

import React from 'react';
import CalendarPanel from './CalendarPanel';
import Button from './Button';
import { useState } from 'react';

const AddEvent = ({ visible, setAddEventVisible }) => {
  const [time, setTime] = useState(null);
  const [description, setDescription] = useState(null);

  function addEvent() {
    console.log('Added event');
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(time);
    console.log(typeof(time));
    console.log(description);
  }
  return (
    <div className={visible ? 'add-event-panel' : 'add-event-panel invisible'}>
      <div className="top-panel">
        <h1>ADD EVENT</h1>
        <Button
          className="add-event-close"
          innerText="Close"
          onClick={() => {
            setAddEventVisible(false);
          }}
        />
      </div>

      <div className="bottom-panel">
        <div className="date-selector">
          <Button className="submit-form" innerText="Test Button" />
        </div>
        <div className="right-panel">
          <form className="submit-event" onSubmit={onSubmit}>
            <input
              className="time-selector"
              type="time"
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
            <input
              type="text"
              className="event-description"
              placeholder="Add Event"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input className="submit-form btn" type="submit" innertext="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
