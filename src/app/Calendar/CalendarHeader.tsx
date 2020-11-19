import React from 'react';
import { Button, Logo } from '@theme';
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
    </header>
  );
};

export default CalendarHeader;
