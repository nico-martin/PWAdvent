import Link from 'next/link';
import React from 'react';
import { useStoreState } from 'unistore-hooks';
import { SVG } from '@theme';
import { State } from '@store/types';
import { DATE_TODAY } from '@utils/calendar';
import cn from '@utils/classnames';
import dayjs from '@utils/dayjs';
import { zeroPad } from '@utils/helpers';
import styles from './CalendarDay.module.css';

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
      <Link href={`/day/${day}/`}>
        <a {...props}>{children}</a>
      </Link>
    ) : (
      <div {...props}>{children}</div>
    );

  return (
    <Wrapper
      className={cn(className, styles.day, {
        [styles.dayActive]: isActive,
      })}
    >
      <div className={styles.inner}>{day}</div>
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
    <SVG
      className={cn(styles.snow, styles[`snow--${day}`])}
      path={`snowwall-${zeroPad(day, 2)}.svg`}
    />
    <CalendarDay day={day} className={cn(styles.inner)} />
  </div>
);

export default CalendarDayWrapper;
