import React from 'react';

import { Button, ShadowBox } from '@theme';

import './AboutControls.css';
import EmailSignup from '@app/About/EmailSignup';
import { DATE_TODAY, DATE_START } from '@utils/calendar';
import { appDescription, appTitle } from '@utils/constants';
import { settingsDB } from '@store/idb';

const AboutControls = ({ className = '' }: { className?: string }) => {
  const [emailBox, setEmailBox] = React.useState<boolean>(false);

  React.useEffect(() => {
    settingsDB.get('emailPopupClosed').then(closed => {
      if (
        DATE_TODAY.isBefore(DATE_START) &&
        window.location.pathname === '/' &&
        !closed
      ) {
        setEmailBox(true);
      }
    });
  }, []);

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
                  url: window.location.href,
                  text: `Check out PWAdvent.dev. ${appDescription}`,
                  title: appTitle,
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
        <ShadowBox
          close={() => {
            settingsDB.set('emailPopupClosed', true);
            setEmailBox(false);
          }}
        >
          <EmailSignup />
        </ShadowBox>
      )}
    </React.Fragment>
  );
};

export default AboutControls;
