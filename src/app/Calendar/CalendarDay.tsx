import React from 'react';
import { Link } from 'react-router-dom';

import { useStoreState } from 'unistore-hooks';
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
  const { days: storeDays } = useStoreState<State>(['days']);

  const dayObject = React.useMemo(() => storeDays[day], [storeDays[day], day]);
  const isActive = React.useMemo(
    () => !dayjs(dayObject.data.date).isAfter(DATE_TODAY),
    [dayObject]
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
      className={cn(className, 'calendar-day', {
        'calendar-day--active': isActive,
      })}
    >
      <div className="calendar-day__inner">{day}</div>
    </Wrapper>
  );
};

const CalendarDayWrapper = ({
  day,
  className = '',
}: {
  day: number;
  className?: string;
}) => (
  <div className={cn(className, 'calendar-day-wrapper')}>
    <SVG
      className={cn(
        'calendar-day-wrapper__snow',
        `calendar-day-wrapper__snow--${day}`
      )}
      path={`snowwall-${zeroPad(day, 2)}.svg`}
    />
    <CalendarDay day={day} className={cn('calendar-day-wrapper__inner')} />
  </div>
);

export default CalendarDayWrapper;
