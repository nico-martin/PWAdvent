import React from 'react';
import { Button, ShadowBox } from '@theme';

import './AboutControls.css';
import EmailSignup from '@app/About/EmailSignup';

const AboutControls = ({ className = '' }: { className?: string }) => {
  const [emailBox, setEmailBox] = React.useState<boolean>(true);

  return (
    <React.Fragment>
      <ul className={`about-controls ${className}`}>
        <li className="about-controls__item">
          <Button
            className="about-controls__button"
            onClick={() => setEmailBox(true)}
            layout="empty"
            round
            icon="mdi/email-outline"
            iconRight
          >
            Subscribe Email
          </Button>
        </li>
        {'share' in navigator && (
          <li className="about-controls__item">
            <Button
              className="about-controls__button"
              onClick={() =>
                navigator.share({
                  url: window.location.href.replace(
                    window.location.pathname,
                    ''
                  ),
                  text: '24 awesome browser features, one each day',
                  title: 'PWAdvent',
                })
              }
              layout="empty"
              round
              icon="mdi/share"
              iconRight
            >
              Tell your friends
            </Button>
          </li>
        )}
        {(window as any).installPrompt && (
          <li className="about-controls__item">
            <Button
              className="about-controls__button"
              onClick={() => (window as any).installPrompt.prompt()}
              layout="empty"
              round
              icon="mdi/download"
              iconRight
            >
              Add to homescreen
            </Button>
          </li>
        )}
      </ul>
      {emailBox && (
        <ShadowBox close={() => setEmailBox(false)}>
          <EmailSignup />
        </ShadowBox>
      )}
    </React.Fragment>
  );
};

export default AboutControls;
