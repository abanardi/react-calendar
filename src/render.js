/** @format */

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
]

function renderCalendar(year, monthIndex, selectedIndex) {
  const dt = new Date(year, monthIndex);
  // 0 of the monthIndex is January because of how date and time work

  // Number of days current month
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  //console.log('Days in Current Month', daysInMonth);

  // Day of first
  // Day of last
  const firstDay = new Date(year, monthIndex, 1).getDay();
  //console.log('First Day', firstDay);
  const lastDay = new Date(year, monthIndex, daysInMonth).getDay();
  //console.log('Last Day', lastDay);

  // Number of days last month
  const daysInPreviousMonth = new Date(year, monthIndex, 0).getDate();
  //console.log('Days in Previous Month', daysInPreviousMonth);

  // Number of days prior
  // Number of days after

  const previousDaysAmount = firstDay;
  const nextDaysAmount = 6 - lastDay;

  //console.log('Number of days before first day', firstDay);
  //console.log('Number of days after last day', 6 - lastDay);

  // Holds all the numbers for the dates
  const previousDays = [];
  const currentDays = [];
  const nextDays = [];

  // Previous Month Dates
  for (let i = 0; i < previousDaysAmount; i++) {
    previousDays.push(daysInPreviousMonth - i);
  }
  previousDays.reverse();

  // Current Month Dates
  for (let i = 1; i < daysInMonth + 1; i++) {
    currentDays.push(i);
  }

  // Next Month Days
  for (let i = 1; i < nextDaysAmount + 1; i++) {
    nextDays.push(i);
  }

  // console.log(previousDays);
  // console.log(currentDays);
  // console.log(nextDays);

  const allDays = []; //Holds all the days including previous and next month;

  previousDays.forEach((date) => {
    // console.log(date);
    const day = {
      date: date,
      currentMonth: false,
      eventToday: false,
      selected: false,
      today: false,
    };
    allDays.push(day);
  });

  const currentLocalDay = new Date();
  // console.log(currentLocalDay.getMonth());

  currentDays.forEach((date) => {
    // console.log(date);

    if (
      currentLocalDay.getMonth() === monthIndex &&
      currentLocalDay.getDate() === date
    ) {
      var today = true;
    } else{
      today = false;
    }

    if(date === selectedIndex){
      var selected = true; 
    }else{
      selected = false;
    }

    // console.log(today);

    
    const day = {
      date: date,
      currentMonth: true,
      eventToday: false,
      selected: selected,
      today: today,
    }
    allDays.push(day);
  });

  nextDays.forEach((date) => {
    // console.log(date);
    const day = {
      date: date,
      currentMonth: false,
      eventToday: false,
      selected: false,
      today: false,
    };
    allDays.push(day);
  });

  // console.log(dt);
  // console.log(dayNames[dt.getDay()]);
  // console.log(monthNames[dt.getMonth()]);
  // console.log(dt.getFullYear());

  return allDays;
}

export default renderCalendar;
