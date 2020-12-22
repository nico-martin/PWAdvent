import React from 'react';
import { Link } from 'react-router-dom';

import { useStoreState } from 'unistore-hooks';
import { State } from '@store/types';

import './CalendarDayList.css';
import cn from '@utils/classnames';
import { DATE_TODAY } from '@utils/calendar';
import dayjs from '@utils/dayjs';
import { SUBJECTS } from '@utils/constants';

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
      className={cn(className, 'calendar-day-list', {
        'calendar-day-list--active': isActive,
      })}
    >
      <span className="calendar-day-list__number">{day}</span>
      <span className="calendar-day-list__title">{SUBJECTS[day - 1]}</span>
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
  <div className={cn(className, 'calendar-day-list-wrapper')}>
    <CalendarDay day={day} className={cn('calendar-day-list-wrapper__inner')} />
  </div>
);

export default CalendarDayWrapper;
