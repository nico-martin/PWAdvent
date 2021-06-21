import React from 'react';
import { useStoreState, useActions } from 'unistore-hooks';
import { inspect } from 'util';
import CalendarDay from '@comps/Calendar/CalendarDay';
import CalendarDayList from '@comps/Calendar/CalendarDayList';
import CalendarHeader from '@comps/Calendar/CalendarHeader';
import useWindowSize from '@comps/hooks/useWindowSize';
import { settingsDB } from '@store/idb';
import { actions } from '@store/index';
import { State } from '@store/types';
import { DATE_END, DATE_TODAY } from '@utils/calendar';
import cn from '@utils/classnames';
import { daysOrder, daysOrderCorrect, VIEW_TYPES } from '@utils/constants';
import styles from './Calendar.module.css';

const Calendar = ({ className = '' }: { className?: string }) => {
  const [view, setView] = React.useState(null);
  const window = useWindowSize();
  const calendarRef = React.useRef(null);
  const [height, setHeight] = React.useState<number>(null);
  const [opacity, setOpacity] = React.useState<number>(0);
  const { setMenuOpen } = useActions(actions);
  const { menuOpen } = useStoreState<State>(['menuOpen']);
  const isCalendar = React.useMemo(() => view === VIEW_TYPES.CALENDAR, [view]);

  React.useEffect(() => {
    if (!DATE_TODAY.isAfter(DATE_END)) {
      setView(VIEW_TYPES.CALENDAR);
      return;
    }
    if (!view) {
      settingsDB.get('view').then((v) => setView(v || VIEW_TYPES.CALENDAR));
    }
    settingsDB.set('view', view);
  }, [view]);

  React.useEffect(() => {
    setTimeout(() => {
      if (calendarRef.current && window.width) {
        if (!isCalendar) {
          setHeight(window.height - 220);
          return;
        }

        const isPortrait = window.height / window.width >= 1;
        const maxHeight = window.height - 200;

        let height = Math.round(
          calendarRef.current.clientWidth * (isPortrait ? 1.3 : 0.9)
        );

        if (height >= maxHeight) {
          height = maxHeight;
        }

        setHeight(height);
      }
    }, 1);
  }, [window, calendarRef, view]);

  React.useEffect(() => {
    height && setOpacity(1);
  }, [height]);

  return (
    <div className={cn(styles.root, className)}>
      {menuOpen && (
        <button
          className={styles.buttonOverlay}
          onClick={() => setMenuOpen(false)}
        >
          close
        </button>
      )}
      <CalendarHeader className={styles.header} setView={setView} view={view} />
      <div
        className={isCalendar ? styles.calendar : styles.list}
        style={{
          //height: isCalendar ? height : 'auto',
          height,
          opacity,
        }}
        ref={calendarRef}
      >
        {(isCalendar ? daysOrder : daysOrderCorrect).map((day) => (
          <div
            className={cn(
              styles.item,
              styles[`item--${day}`],
              styles[`item--${view}`]
            )}
          >
            {isCalendar ? (
              <CalendarDay day={parseInt(day)} />
            ) : (
              <CalendarDayList day={parseInt(day)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
