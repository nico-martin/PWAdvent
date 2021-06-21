import React from 'react';
import { useActions } from 'unistore-hooks';
import { Button, Logo } from '@theme';
import AboutControls from '@comps/About/AboutControls';
import AboutNavigation from '@comps/About/AboutNavigation';
import { actions } from '@store/index';
import styles from './About.module.css';

const About = ({
  className = '',
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => {
  const { setMenuOpen } = useActions(actions);

  return (
    <article className={`${className}`} {...props}>
      <header className={styles.header}>
        <Logo
          className={styles.logo}
          title="PWAdvent Logo"
          alt="PWAdvent Logo"
        />
        <Button
          onClick={() => setMenuOpen(false)}
          className={styles.button}
          layout="ghost"
          icon="mdi/calendar-month"
          round
          size="small"
        >
          Calendar
        </Button>
      </header>
      <div className={styles.description}>
        <p>
          PWAdvent is the perfect advent calendar for everyone who's excited
          about the web platform. Take a look at all the great stuff the web has
          to offer.
        </p>
        <p>
          From the 1st to the 24th of December 2020 we will introduce a new
          progressive browser feature every day — stay tuned for a set of
          features you most certainly did not know the web is capable of.
        </p>
      </div>
      <AboutControls className={styles.controls} />
      <AboutNavigation className={styles.navigation} />
    </article>
  );
};

export default About;
