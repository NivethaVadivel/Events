import { useState } from 'react';
import Calendar from 'react-calendar';
import "../css/cal.css"
export const Cal=()=> {
  const [date, setDate] = useState(new Date());
  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='cent'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}
