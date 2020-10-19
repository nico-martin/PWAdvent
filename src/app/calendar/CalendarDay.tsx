import React from 'react';
import { CALENDAR, YEAR } from '@utils/calendar';

import dayjs from '@utils/dayjs';
import { zeroPad } from '@utils/helpers';

import './CalendarDay.css';

const CalendarDay = ({
  index,
  className = '',
}: {
  index: number;
  className?: string;
}) => {
  const day: number = React.useMemo(() => CALENDAR[index], [index]);
  const date: dayjs.Dayjs = React.useMemo(
    () => dayjs(`${YEAR}-12-${zeroPad(day, 2)}`),
    [day]
  );

  return (
    <div className={`${className} calendar-day`}>
      <div className="calendar-day__content">
        <div className="calendar-day__number">
          {day} - {date.format('L LT')}
        </div>
      </div>
    </div>
  );
};

export default CalendarDay;
