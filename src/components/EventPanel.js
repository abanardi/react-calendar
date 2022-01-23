/** @format */

import React from 'react';
import EventItem from './EventItem';
import Button from './Button';

const EventPanel = ({ events, visible, date, setAddEventVisible }) => {
  return (
    <div
      className={
        visible ? 'event-panel container ' : 'event-panel container invisible'
      }
    >
      <h1 className="event-date">{date}</h1>
      <div className="event-list">
        {events.map((event) => {
          // console.log(event.time);
          const date = new Date(event.time * 1000);
          // console.log(date);
          // console.log(event);
          let hourDigit = date.getHours();
          let minuteDigit = date.getMinutes();
          let postDigit = '';

          hourDigit < 12 ? (postDigit = 'AM') : (postDigit = 'PM');

          minuteDigit === 0
            ? (minuteDigit = '00')
            : (minuteDigit = minuteDigit);

          hourDigit > 12
            ? (hourDigit -= 12)
            : hourDigit === 0
            ? (hourDigit = 12)
            : (hourDigit = hourDigit);

          const timeString = hourDigit + ':' + minuteDigit + ' ' + postDigit;

          return (
            <EventItem
              innerText={event.innerText}
              time={timeString}
              complete={Date.now() > event.time ? true : false}
            />
          );
        })}
      </div>
      <Button
        className="add-event-open"
        innerText="Add Event"
        onClick={() => {
          setAddEventVisible(true);
        }}
      />
    </div>
  );
};

export default EventPanel;
