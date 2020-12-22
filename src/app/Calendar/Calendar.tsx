import React from 'react';
import { useStoreState, useActions } from 'unistore-hooks';

import { daysOrder, daysOrderCorrect, VIEW_TYPES } from '@utils/constants';
import CalendarDay from '@app/Calendar/CalendarDay';
import CalendarDayList from '@app/Calendar/CalendarDayList';
import { State } from '@store/types';
import { actions } from '@store/index';
import useWindowSize from '@app/hooks/useWindowSize';
import CalendarHeader from '@app/Calendar/CalendarHeader';

import './Calendar.css';
import { settingsDB } from '@store/idb';
import { DATE_END, DATE_TODAY } from '@utils/calendar';

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
      settingsDB.get('view').then(v => setView(v || VIEW_TYPES.CALENDAR));
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
    <div className={`calendar ${className}`}>
      {menuOpen && (
        <button
          className="calendar__button-overlay"
          onClick={() => setMenuOpen(false)}
        >
          close
        </button>
      )}
      <CalendarHeader
        className="calendar__header"
        setView={setView}
        view={view}
      />
      <div
        className={isCalendar ? 'calendar__calendar' : 'calendar__list'}
        style={{
          //height: isCalendar ? height : 'auto',
          height,
          opacity,
        }}
        ref={calendarRef}
      >
        {(isCalendar ? daysOrder : daysOrderCorrect).map(day => (
          <div
            className={`calendar__item calendar__item--${day} calendar__item--${view} `}
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
