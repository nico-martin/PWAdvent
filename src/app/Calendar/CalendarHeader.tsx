import React from 'react';
import { Logo } from '@theme';
import { useActions } from 'unistore-hooks';

import './CalendarHeader.css';
import { actions } from '@store/index';

const CalendarHeader = ({ className = '' }: { className?: string }) => {
  const { setMenuOpen } = useActions(actions);

  return (
    <header className={`${className} calendar-header`}>
      <Logo
        className="calendar-header__logo"
        title="PWAdvent Logo"
        alt="PWAdvent Logo"
        sameheight
      />
      <button
        className="calendar-header__button"
        onClick={() => setMenuOpen(true)}
      >
        Menu
      </button>
    </header>
  );
};

export default CalendarHeader;
