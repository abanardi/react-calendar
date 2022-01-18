/** @format */

import './App.css';
import Button from './components/Button';
import CalendarPanel from './components/CalendarPanel';
import { useEffect, useState, createContext } from 'react';
import renderCalendar from './render';
import EventPanel from './components/EventPanel';
import { db } from './firebase-config';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function App() {
  const [days, setDays] = useState([]);
  const dt = new Date();
  const [year, setYear] = useState(dt.getFullYear());
  const [month, setMonth] = useState(dt.getMonth());
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [events, setEvents] = useState([]);
  const [eventDate, setEventDate] = useState('');

  function renderEvents() {
    async function grabData() {
      const eventsDay = collection(db, 'Year/2022/January/sixteen/events');
      // console.log(eventsDay);
      const eventsSnap = await getDocs(eventsDay);
      const allEvents = eventsSnap.docs
        .map((doc) => doc.data())
        .map((event) => ({ ...event, time: event.time.seconds }))
        .sort((a, b) => (a.time > b.time ? 1 : -1));

      // console.log(allEvents[0].time);
      const time = new Date(allEvents[0].time);
      // console.log(time.getHours());
      // console.log(time.getMinutes());
      // console.log(time);
      // console.log(time.getHours());
      // console.log(time.getMinutes());

      setEvents(allEvents);
    }
    grabData();
  }

  function switchNextMonth() {
    setSelectedIndex(null);
    setMonth(month + 1);
    // console.log('Next');
  }

  function switchPreviousMonth() {
    setSelectedIndex(null);
    setMonth(month - 1);
    // console.log('Previous');
  }

  useEffect(() => {
    const newDays = renderCalendar(year, month, selectedIndex);
    const date = new Date(year, month);
    console.log(date.getMonth());
    console.log(date.getFullYear());

    const displayMonth = date.getMonth() + 1;
    const displayYear = date.getFullYear();

    setEventDate(displayMonth + '/' + selectedIndex + '/' + displayYear);
    renderEvents();
    setDays(newDays);
  }, [year, month, selectedIndex]);

  const selectedDate = new Date(year, month);
  // console.log(year);
  // console.log(month);
  // console.log(days);

  return (
    <div className="App">
      <CalendarPanel
        daysList={days}
        switchNext={switchNextMonth}
        switchPrevious={switchPreviousMonth}
        selectedMonth={
          monthNames[selectedDate.getMonth()] + ' ' + selectedDate.getFullYear()
        }
        selectedDate={
          dayNames[dt.getDay()] +
          ', ' +
          monthNames[dt.getMonth()] +
          ' ' +
          dt.getDate() +
          ' ' +
          dt.getFullYear()
        }
        setSelectedIndex={setSelectedIndex}
      />
      <EventPanel events={events} visible={true} date={eventDate} />
    </div>
  );
}

export default App;
