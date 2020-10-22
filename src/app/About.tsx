import React from 'react';
import { Logo } from '@theme';
import { DATE_TODAY } from '@utils/calendar';

const About = ({
  className = '',
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => (
  <article className={`${className} about`} {...props}>
    <header className="about__header">
      <Logo title="PWAdvent Logo" alt="PWAdvent Logo" />
    </header>
    <p>
      From the 1st to the 24th of December 2020 we will introduce a new
      progressive browser feature every day.
    </p>
    <p>Today: {DATE_TODAY.format('L')}</p>
  </article>
);

export default About;
