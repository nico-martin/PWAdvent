import React from 'react';
import { Button } from '@theme';

import './AboutControls.css';

const AboutControls = ({
  className = '',
  setEmailBox,
}: {
  className?: string;
  setEmailBox: Function;
}) => {
  return (
    <ul className={`about-controls ${className}`}>
      <li className="about-controls__item">
        <Button
          className="about-controls__button"
          onClick={() => setEmailBox(true)}
          ghost
          round
          icon="mdi/email-outline"
          iconRight
        >
          Subscribe
        </Button>
      </li>
    </ul>
  );
};

export default AboutControls;
