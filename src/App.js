/** @format */

import './App.css';
import Button from './components/Button';
import CalendarPanel from './components/CalendarPanel';
import { useEffect, useState, createContext } from 'react';
import renderCalendar from './render';

function App() {
  const [days, setDays] = useState([]);
  const dt = new Date();
  const [year, setYear] = useState(dt.getFullYear());
    const [month, setMonth] = useState(dt.getMonth());

  function switchNexthMonth(){    
    setMonth(month+1);
    console.log('Next');
  }

  function switchPreviousMonth(){
    setMonth(month-1);
    console.log('Previous');
  }

  useEffect(()=>{
    const newDays = renderCalendar(year,month);
    setDays(newDays);
  }, [year, month])

  // console.log(year);
  // console.log(month);
  // console.log(days);

  return (
    <div className="App">
      <CalendarPanel daysList={days} switchNext={switchNexthMonth} switchPrevious={switchPreviousMonth}/>
    </div>
  );
}

export default App;
