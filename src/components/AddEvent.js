/** @format */

import React from 'react';
import CalendarPanel from './CalendarPanel';
import Button from './Button';
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase-config';
import { v4 as uuidv4 } from 'uuid';

const AddEvent = ({ visible, setAddEventVisible, year, month, selectedIndex, manualRender, setManualRender }) => {
  const [time, setTime] = useState(null);
  const [description, setDescription] = useState(null);

  function addEvent() {
    if(time === null || description === ''){
      return
    }  
    const hour = time.substr(0,2);
    const minute = time.substr(3,4);
    const dt = new Date(year, month, selectedIndex, hour, minute);
    const { v4: uuidv4 } = require('uuid')
    const id = uuidv4();
    
    async function addDatabase(){
      // console.log('Running Database');
      const eventPath = year + '/' + month + '/' + selectedIndex + '/events' + '/' + id; 
      // console.log(eventPath);
      await setDoc(doc(db, 'Year/' + eventPath), {
        id: id,
        innerText: description,
        time: dt
      })
    }

    addDatabase();

  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(manualRender);
    const reverse = !manualRender;
    console.log(reverse);
    setManualRender(reverse);
    addEvent();

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
        {/* <div className="date-selector">
          <Button className="submit-form" innerText="Test Button" />
        </div> */}
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
