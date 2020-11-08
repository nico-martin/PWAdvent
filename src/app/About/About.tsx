import React from 'react';
import { Button, Logo, ShadowBox } from '@theme';
import AboutControls from '@app/About/AboutControls';

import './About.css';

const About = ({
  className = '',
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => {
  const [emailBox, setEmailBox] = React.useState<boolean>(false);
  return (
    <article className={`${className} about`} {...props}>
      <header className="about__header">
        <Logo
          className="about__logo"
          title="PWAdvent Logo"
          alt="PWAdvent Logo"
        />
      </header>
      <p>
        From the 1st to the 24th of December 2020 we will introduce a new
        progressive browser feature every day.
      </p>
      <AboutControls className="about__controls" setEmailBox={setEmailBox} />
      {emailBox && (
        <ShadowBox close={() => setEmailBox(false)}>
          Are you excited for Progressive Web Apps? Let's get ready for
          PWAdvent! 24 features in 24 days. Make sure to subscribe and get
          notified as soon as a new feature is published.
        </ShadowBox>
      )}
    </article>
  );
};

export default About;
