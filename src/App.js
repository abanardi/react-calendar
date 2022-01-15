/** @format */

import './App.css';
import Button from './components/Button';
import CalendarPanel from './components/CalendarPanel';
import { useEffect, useState, createContext } from 'react';
import renderCalendar from './render';

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

  function selectDate(date) {
    // setSelectedIndex(19);
    // const outside = document.querySelector
    console.log('hello');
  }

  useEffect(() => {
    const newDays = renderCalendar(year, month, selectedIndex);
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
        selectedMonth={monthNames[selectedDate.getMonth()] + ' ' + selectedDate.getFullYear()}
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
    </div>
  );
}

export default App ;
