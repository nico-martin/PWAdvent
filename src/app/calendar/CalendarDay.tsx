import React from 'react';
import { Link } from 'react-router-dom';

import { useStoreState, useActions } from 'unistore-hooks';
import { actions } from '@store/index';
import { State } from '@store/types';

import { THEMEN } from '@utils/calendar';

import { getRandomNumber } from '@utils/helpers';

import './CalendarDay.css';

const CalendarDay = ({
  day,
  className = '',
}: {
  day: number;
  className?: string;
}) => {
  const { loadDay } = useActions(actions);
  const { days: storeDays } = useStoreState<State>(['days']);

  const dayObject = React.useMemo(() => storeDays[day], [storeDays[day], day]);
  const isActive = React.useMemo(() => dayObject.active, [dayObject]);

  React.useEffect(() => {
    loadDay(day);
  }, [day]);

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
