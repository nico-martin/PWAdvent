import React from 'react';
import { Link } from 'react-router-dom';

import { YEAR, DATE_TODAY, THEMEN } from '@utils/calendar';

import dayjs from '@utils/dayjs';
import { getRandomNumber, zeroPad } from '@utils/helpers';

import './CalendarDay.css';

const CalendarDay = ({
  day,
  className = '',
}: {
  day: number;
  className?: string;
}) => {
  const date: dayjs.Dayjs = React.useMemo(
    () => dayjs(`${YEAR}-12-${zeroPad(day, 2)}`),
    [day]
  );

  const isActive: boolean = React.useMemo(
    () => date.isBefore(DATE_TODAY) || date.isSame(DATE_TODAY),
    [day]
  );

  const Wrapper = ({
    children,
    ...props
  }: {
    children: any;
    [key: string]: any;
  }) =>
    isActive ? (
      <Link to={`/day/${day}/`} {...props}>
        {children}
      </Link>
    ) : (
      <div {...props}>{children}</div>
    );

  return (
    <Wrapper
      className={`${className} calendar-day ${
        isActive ? 'calendar-day--active' : ''
      }`}
    >
      <div className="calendar-day__inner">
        <div className="calendar-day__front">
          <div
            className="calendar-day__shade"
            style={{ opacity: getRandomNumber(0, 0.1) }}
          />
          <div className="calendar-day__content">{day}</div>
        </div>
        <div className="calendar-day__back">
          <div className="calendar-day__content">{THEMEN[day - 1]}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CalendarDay;
