import Link from 'next/link';
import React from 'react';
import { useStoreState } from 'unistore-hooks';
import { State } from '@store/types';
import { DATE_TODAY } from '@utils/calendar';
import cn from '@utils/classnames';
import { SUBJECTS } from '@utils/constants';
import dayjs from '@utils/dayjs';
import styles from './CalendarDayList.module.css';

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
  }) => {
    if (isActive) {
      return (
        <Link href={`/day/${day}/`}>
          <a {...props}>{children}</a>
        </Link>
      );
    } else {
      return <div {...props}>{children}</div>;
    }
  };

  return (
    <Wrapper
      className={cn(className, styles.root, {
        [styles.rootActive]: isActive,
      })}
    >
      <span className={styles.number}>{day}</span>
      <span className={styles.title}>{SUBJECTS[day - 1]}</span>
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
  <div className={cn(className, styles.wrapper)}>
    <CalendarDay day={day} className={cn(styles.wrapperInner)} />
  </div>
);

export default CalendarDayWrapper;
