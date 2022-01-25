/** @format */

import React from 'react';
import CalendarPanel from './CalendarPanel';
import Button from './Button';

const AddEvent = ({ visible, setAddEventVisible }) => {
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
          <Button className='submit-form' innerText='Test Button'/>
        </div>
        <div className="right-panel">
          <form className="submit-event">
            <input type="time" />
            <input
              type="text"
              className="event-description"
              placeholder="Add Event"
            />
            <Button className='submit-form' innerText='Add'/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
