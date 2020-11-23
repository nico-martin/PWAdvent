import React from 'react';
import { useActions } from 'unistore-hooks';

import { Button, Logo } from '@theme';
import AboutControls from '@app/About/AboutControls';

import './About.css';
import { actions } from '@store/index';
import AboutNavigation from '@app/About/AboutNavigation';

const About = ({
  className = '',
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => {
  const { setMenuOpen, loadVapidKey } = useActions(actions);

  React.useEffect(() => {
    loadVapidKey();
  }, []);

  return (
    <article className={`${className} about`} {...props}>
      <header className="about__header">
        <Logo
          className="about__logo"
          title="PWAdvent Logo"
          alt="PWAdvent Logo"
        />
        <Button
          onClick={() => setMenuOpen(false)}
          className="about__button"
          layout="ghost"
          icon="mdi/calendar-month"
          round
          size="small"
        >
          Calendar
        </Button>
      </header>
      <div className="about__description">
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
      <AboutControls className="about__controls" />
      <AboutNavigation className="about__navigation" />
    </article>
  );
};

export default About;
