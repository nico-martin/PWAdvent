import React from 'react';
import { useActions } from 'unistore-hooks';

import { Button, Logo, ShadowBox } from '@theme';
import AboutControls from '@app/About/AboutControls';

import './About.css';
import { actions } from '@store/index';

const About = ({
  className = '',
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => {
  const { setMenuOpen } = useActions(actions);
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
          type="ghost"
          icon="mdi/calendar-month"
          round
          size="small"
        >
          Calendar
        </Button>
      </header>
      <div className="about__description">
        <p>
          Christmas is the perfect time to take a look at all the great stuff
          the web has to offer.
        </p>
        <p>
          From the 1st to the 24th of December 2020 we will introduce a new
          progressive browser feature every day.
        </p>
      </div>
      <AboutControls className="about__controls" />
    </article>
  );
};

export default About;
