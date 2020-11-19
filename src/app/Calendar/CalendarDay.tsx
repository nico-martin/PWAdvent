import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useStoreState, useActions } from 'unistore-hooks';
import { actions } from '@store/index';
import { State } from '@store/types';

import './CalendarDay.css';
import cn from '@utils/classnames';
import { DATE_TODAY } from '@utils/calendar';
import dayjs from '@utils/dayjs';
import { SVG } from '@theme';
import { zeroPad } from '@utils/helpers';

const days = {
  1: 16,
  2: 2,
  3: 3,
  4: 8,
  5: 5,
  6: 6,
  7: 4,
  8: 9,
  9: 7,
  10: 10,
  11: 11,
  12: 15,
  13: 13,
  14: 18,
  15: 12,
  16: 1,
  17: 20,
  18: 19,
  19: 14,
  20: 21,
  21: 8,
  22: 17,
  23: 23,
  24: 24,
};

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
  const isLoaded = React.useMemo(() => dayObject.loaded, [dayObject]);
  const isActive = React.useMemo(
    () => !dayjs(dayObject.data.date).isAfter(DATE_TODAY),
    [dayObject]
  );

  React.useEffect(() => {
    loadDay(day);
  }, [day]);

  const svgDay = React.useMemo(() => {
    console.log(day, days[day]);
    return days[day];
  }, [day, days]);

  const Wrapper = ({
    children,
    ...props
  }: {
    children: any;
    [key: string]: any;
  }) =>
    isLoaded ? (
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
      <SVG
        className={cn('calendar-day__snow', `calendar-day__snow--${svgDay}`)}
        path={`snowwall-${zeroPad(svgDay, 2)}.svg`}
      />
      <div className="calendar-day__inner">{day}</div>
    </Wrapper>
  );
};

export default CalendarDay;
