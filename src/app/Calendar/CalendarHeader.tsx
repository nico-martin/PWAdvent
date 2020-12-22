import React from 'react';
import { Button, Logo } from '@theme';
import { useActions } from 'unistore-hooks';

import { actions } from '@store/index';
import { VIEW_TYPES } from '@utils/constants';
import cn from '@utils/classnames';

import './CalendarHeader.css';
import { DATE_END, DATE_TODAY } from '@utils/calendar';

const CalendarHeader = ({
  className = '',
  setView,
  view,
}: {
  className?: string;
  setView: Function;
  view: string;
}) => {
  const { setMenuOpen } = useActions(actions);

  return (
    <header className={`${className} calendar-header`}>
      <Logo
        className="calendar-header__logo"
        title="PWAdvent Logo"
        alt="PWAdvent Logo"
        sameheight
      />
      <Button
        className="calendar-header__button"
        onClick={() => setMenuOpen(true)}
        icon="mdi/menu"
        layout="ghost"
        round
        size="small"
      >
        About
      </Button>
      {DATE_TODAY.isAfter(DATE_END) && (
        <div className="calendar-header__view">
          {Object.values(VIEW_TYPES).map(type => (
            <Button
              onClick={() => setView(type)}
              className={cn('calendar-header__view-button', {
                'calendar-header__view-button--active': type === view,
              })}
              size="small"
              layout={type === view ? 'solid' : 'ghost'}
              icon={`mdi/${type}`}
              round
              color={type === view ? 'red' : 'black'}
            >
              {type === VIEW_TYPES.CALENDAR ? 'Calendar' : 'List'}
            </Button>
          ))}
        </div>
      )}
    </header>
  );
};

export default CalendarHeader;
