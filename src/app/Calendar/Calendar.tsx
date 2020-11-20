import React from 'react';
import { useStoreState, useActions } from 'unistore-hooks';

import { zeroPad } from '@utils/helpers';
import CalendarDay from '@app/Calendar/CalendarDay';
import { State } from '@store/types';
import { actions } from '@store/index';
import useWindowSize from '@app/hooks/useWindowSize';
import CalendarHeader from '@app/Calendar/CalendarHeader';

import './Calendar.css';
import { daysOrder } from '@utils/constants';

const Calendar = ({ className = '' }: { className?: string }) => {
  const window = useWindowSize();
  const calendarRef = React.useRef(null);
  const [height, setHeight] = React.useState<number>(null);
  const { setMenuOpen } = useActions(actions);
  const { menuOpen } = useStoreState<State>(['menuOpen']);

  React.useEffect(() => {
    if (calendarRef.current && window.width) {
      setHeight(
        Math.round(
          calendarRef.current.clientWidth *
            (window.height / window.width >= 1 ? 1.3 : 0.9)
        )
      );
    }
  }, [window, calendarRef]);

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
      <CalendarHeader className="calendar__header" />
      <div className="calendar__calendar" style={{ height }} ref={calendarRef}>
        {daysOrder.map(day => (
          <div
            //style={{ gridArea: `cal${zeroPad(parseInt(day), 2)}` }}
            className={`calendar__item calendar__item--${day}`}
          >
            <CalendarDay day={parseInt(day)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
