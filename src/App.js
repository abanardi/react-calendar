/** @format */

import './App.css';
import Button from './components/Button';
import CalendarPanel from './components/CalendarPanel';
import { useEffect, useState, createContext } from 'react';
import renderCalendar from './render';

function App() {
  const [days, setDays] = useState([]);

  useEffect(()=>{
    const newDays = renderCalendar(2022,0);
    setDays(newDays);
  }, [])

  console.log(days);

  return (
    <div className="App">
      <CalendarPanel />
    </div>
  );
}

export default App;
