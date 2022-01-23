/** @format */

import React from 'react';
import CalendarPanel from './CalendarPanel';
import Button from './Button';

const AddEvent = ({ visible, setAddEventVisible }) => {
  return (
    <div className={visible ? 'add-event-panel' : 'add-event-panel invisible'}>
      <h1 className="test">Header</h1>
      <Button
        className="add-event-close"
        innerText="Close"
        onClick={() => {
          setAddEventVisible(false);
        }}
      />
    </div>
  );
};

export default AddEvent;
