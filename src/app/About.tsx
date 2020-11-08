import React from 'react';
import { Button, Logo, ShadowBox } from '@theme';
import { DATE_TODAY } from '@utils/calendar';

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
        <Logo title="PWAdvent Logo" alt="PWAdvent Logo" />
      </header>
      <p>
        From the 1st to the 24th of December 2020 we will introduce a new
        progressive browser feature every day.
      </p>
      <Button onClick={() => setEmailBox(true)}>Notify</Button>
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
