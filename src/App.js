/** @format */

import './App.css';
import Button from './components/Button';
import CalendarPanel from './components/CalendarPanel';
import { useEffect, useState, createContext } from 'react';
import renderCalendar from './render';
import EventPanel from './components/EventPanel';
import { db } from './firebase-config';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import AddEvent from './components/AddEvent';

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
  const [visible, setVisible] = useState(false);
  const [eventDate, setEventDate] = useState('');
  const [addEventVisible, setAddEventVisible] = useState(false);

  function renderEvents(year, month, selectedIndex) {
    async function grabData() {
      const eventsDay = collection(db, 'Year/2022/January/sixteen/events');
      const eventsSnap = await getDocs(eventsDay);
      const eventsPre = eventsSnap.docs;
      let allEvents = [];
      // console.log(eventsPre.length);
      if (eventsPre.length === 0) {
        allEvents = ['No events to display'];
      } else {
        // console.log('Events found');
        allEvents = eventsPre
          .map((doc) => doc.data())
          .map((event) => ({ ...event, time: event.time.seconds }))
          .sort((a, b) => (a.time > b.time ? 1 : -1));
      }
      // console.log(allEvents[0].time);
      // const time = new Date(allEvents[0].time);
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
    setVisible(false);
    setMonth(month + 1);
    // console.log('Next');
  }

  function switchPreviousMonth() {
    setSelectedIndex(null);
    setVisible(false);
    setMonth(month - 1);
    // console.log('Previous');
  }

  
  useEffect(() => {
    const newDays = renderCalendar(year, month, selectedIndex);
    const date = new Date(year, month);

    const displayMonth = date.getMonth() + 1;
    const displayYear = date.getFullYear();

    setEventDate(displayMonth + '/' + selectedIndex + '/' + displayYear);
    renderEvents(year, month, selectedIndex);
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
        selectedIndex={selectedIndex}
        setVisible={setVisible}
      />
      <EventPanel events={events} visible={visible} date={eventDate} setAddEventVisible={setAddEventVisible} />
      <AddEvent visible={addEventVisible} setAddEventVisible={setAddEventVisible} />
      
    </div>
  );
}

export default App;
