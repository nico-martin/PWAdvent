import React from 'react';
import { useActions } from 'unistore-hooks';
import { Button, Logo } from '@theme';
import { actions } from '@store/index';
import { DATE_END, DATE_TODAY } from '@utils/calendar';
import cn from '@utils/classnames';
import { VIEW_TYPES } from '@utils/constants';
import styles from './CalendarHeader.module.css';

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
    <header className={cn(className, styles.root)}>
      <Logo
        className={styles.logo}
        title="PWAdvent Logo"
        alt="PWAdvent Logo"
        sameheight
      />
      <Button
        className={styles.button}
        onClick={() => setMenuOpen(true)}
        icon="mdi/menu"
        layout="ghost"
        round
        size="small"
      >
        About
      </Button>
      {DATE_TODAY.isAfter(DATE_END) && (
        <div className={styles.view}>
          {Object.values(VIEW_TYPES).map((type) => (
            <Button
              onClick={() => setView(type)}
              className={cn(styles.viewButton, {
                [styles.viewButtonActive]: type === view,
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
