import React from 'react';
import { Button, PortalBox, SVG } from '@theme';
import EmailSignup from '@comps/About/EmailSignup';
import PushNotifications from '@comps/About/PushNotifications';
import cn from '@utils/classnames';
import { appDescription, appTitle } from '@utils/constants';
import styles from './AboutControls.module.css';

const AboutControls = ({ className = '' }: { className?: string }) => {
  const [emailBox, setEmailBox] = React.useState<boolean>(false);
  const [pushBox, setPushBox] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <ul className={cn(styles.root, className)}>
        <li className={cn(styles.item)}>
          <Button
            className={cn(styles.button)}
            onClick={() => setEmailBox(true)}
            layout="empty"
            round
            icon="mdi/email-outline"
            iconRight
          >
            Subscribe Email
          </Button>
        </li>
        <li className={cn(styles.item)}>
          <Button
            className={cn(styles.button)}
            onClick={() => setPushBox(true)}
            layout="empty"
            round
            icon="mdi/bell-outline"
            iconRight
          >
            Push Notifications
          </Button>
        </li>
        {'share' in navigator && (
          <li className={cn(styles.item)}>
            <Button
              className={cn(styles.button)}
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
          <li className={cn(styles.item)}>
            <Button
              className={cn(styles.button)}
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
        <PortalBox
          size="small"
          close={() => {
            //settingsDB.set('emailPopupClosed', true);
            setEmailBox(false);
          }}
          title="Email signup"
        >
          <EmailSignup />
        </PortalBox>
      )}
      {pushBox && (
        <PortalBox
          size="small"
          close={() => setPushBox(false)}
          title="Push Notifications"
        >
          <PushNotifications />
        </PortalBox>
      )}
    </React.Fragment>
  );
};

export default AboutControls;
