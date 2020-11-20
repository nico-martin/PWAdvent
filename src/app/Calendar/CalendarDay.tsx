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
        className={cn('calendar-day__snow', `calendar-day__snow--${day}`)}
        path={`snowwall-${zeroPad(day, 2)}.svg`}
      />
      <div className="calendar-day__inner">{day}</div>
    </Wrapper>
  );
};

export default CalendarDay;
