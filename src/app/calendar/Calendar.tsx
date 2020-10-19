import React from 'react';
import { CALENDAR } from '@utils/calendar';
import './Calendar.css';
import CalendarDay from './CalendarDay';

const Calendar = ({ className = '' }: { className?: string }) => {
  return (
    <ul className={`${className} calendar`}>
      {CALENDAR.map((day, index) => (
        <li className="calendar__day">
          <CalendarDay index={index} />
        </li>
      ))}
    </ul>
  );
};

export default Calendar;
