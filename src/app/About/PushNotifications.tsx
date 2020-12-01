import React from 'react';

import { useStoreState } from 'unistore-hooks';

import cn from '@utils/classnames';

import { State } from '@store/types';
import { Button, Loader, Notification, SVG } from '@theme';
import { isIos, urlB64ToUint8Array } from '@utils/helpers';

import './PushNotifications.css';
import { apiBase } from '@utils/constants';

const PushNotifications = ({ className = '' }: { className?: string }) => {
  const [error, setError] = React.useState<string>('');
  const [isSubscribed, setIsSubscribed] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const supportsPush = 'PushManager' in window && 'serviceWorker' in navigator;

  React.useEffect(() => {
    (async function effect() {
      if (window.Notification.permission === 'denied') {
        setError(
          'It looks like you already explicitly denied permission for pwadvent.dev to display system notifications. Please change this option in the site settings and reload this page.'
        );
        return;
      }

      const reg = await navigator.serviceWorker.getRegistration();
      const subscription = await reg.pushManager.getSubscription();
      if (subscription) {
        await sendSubscription(subscription.toJSON());
        setIsSubscribed(true);
      }
    })();
  }, []);

  const getVapidKey = async () => {
    let key = '';
    const resp = await fetch(
      `${apiBase}wp-json/advent-calendar/v1/web-push/public-key`
    );

    if (resp.ok) {
      const respJson = await resp.json();
      key = respJson.publicKey;
    }
    return key;
  };

  const subscribe = async () => {
    setLoading(true);
    const reg = await navigator.serviceWorker.getRegistration();
    const vapidKey = await getVapidKey();
    if (vapidKey === '') {
      alert('something went wrong. Could not connect to the push server');
    }
    const subscription = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: new Uint8Array(urlB64ToUint8Array(vapidKey)),
    });
    await sendSubscription(subscription.toJSON());
    setLoading(false);
    setIsSubscribed(true);
  };

  const unsubscribe = async () => {
    setLoading(true);
    const reg = await navigator.serviceWorker.getRegistration();
    const subscription = await reg.pushManager.getSubscription();
    await sendDeleteSubscription(subscription.toJSON());
    await subscription.unsubscribe();
    setLoading(false);
    setIsSubscribed(false);
  };

  const sendSubscription = async (subscription: PushSubscriptionJSON) =>
    fetch(`${apiBase}wp-json/advent-calendar/v1/web-push/subscription/`, {
      method: 'post',
      body: JSON.stringify({
        subscription: subscription,
        timezoneOffset: new Date().getTimezoneOffset(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  const sendDeleteSubscription = async (subscription: PushSubscriptionJSON) =>
    fetch(`${apiBase}wp-json/advent-calendar/v1/web-push/subscription/`, {
      method: 'delete',
      body: JSON.stringify({
        subscription: subscription,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  return (
    <div className={cn(className, 'push-notifications')}>
      <p className="push-notifications__about">
        <b>Never miss a feature again!</b>
        <br />
        Subscribe to push notifications and receive a daily notification when
        the new window opens.
      </p>
      <div className="push-notifications__feedback">
        {error !== '' ? (
          <Notification type="error">
            <p>{error}</p>
          </Notification>
        ) : !supportsPush ? (
          <React.Fragment>
            <Notification type="error">
              <p>Your browser does not support web push notifications.</p>
            </Notification>
            {isIos && (
              <p>
                <br />
                Unfortunately, <b>Apple</b> tries to hold back the further
                development of rich web applications by{' '}
                <b>not implementing features like web push into iOS.</b>
                <br />
                It is now up to us to build pressure by{' '}
                <a
                  href="https://bugs.webkit.org/show_bug.cgi?id=182566"
                  target="_blank"
                >
                  describing our usecase
                </a>{' '}
                and/or{' '}
                <a
                  href="https://www.change.org/p/tim-cook-apple-inc-implement-web-push-notifications-on-ios-devices?utm_content=cl_sharecopy_18178670_fr-FR%3Av1&recruiter=1092330168&recruited_by_id=76293570-9ba6-11ea-bd01-e5d39501339a&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=share_petition"
                  target="_blank"
                >
                  making ourselves heard
                </a>
                .
              </p>
            )}
          </React.Fragment>
        ) : !isSubscribed ? (
          <React.Fragment>
            <Button
              icon="mdi/bell"
              onClick={() => subscribe()}
              color="red"
              loading={loading}
            >
              Subscribe
            </Button>
            <br />
            <p className="fs--xsmall">
              From the first to the 24th of december 2020 we will send you a
              link to the latest article every morning. You are able to
              unsubscribe at any time here
            </p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p className="push-notifications__checked">
              <SVG path="icon/mdi/check.svg" inline />{' '}
              <b>Push notifications are activated</b>
            </p>
            <Button
              layout="ghost"
              size="small"
              icon="mdi/bell-outline"
              round
              onClick={() => unsubscribe()}
              loading={loading}
              fontWeight="normal"
            >
              Unsubscribe
            </Button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default PushNotifications;
