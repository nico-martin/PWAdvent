import React from 'react';

import { useStoreState } from 'unistore-hooks';

import cn from '@utils/classnames';

import { State } from '@store/types';
import { Button, Loader, Notification, SVG } from '@theme';
import { urlB64ToUint8Array } from '@utils/helpers';

import './PushNotifications.css';
import { apiBase } from '@utils/constants';

const PushNotifications = ({ className = '' }: { className?: string }) => {
  const { vapidKey } = useStoreState<State>(['vapidKey']);
  const [isSubscribed, setIsSubscribed] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const idIos = React.useMemo(
    () =>
      [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod',
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document),
    []
  );

  React.useEffect(() => {
    (async function effect() {
      const reg = await navigator.serviceWorker.getRegistration();
      const subscription = await reg.pushManager.getSubscription();
      if (subscription) {
        await sendSubscription(subscription.toJSON());
        setIsSubscribed(true);
      }
    })();
  }, []);

  const subscribe = async () => {
    setLoading(true);
    const reg = await navigator.serviceWorker.getRegistration();
    const subscription = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: new Uint8Array(urlB64ToUint8Array(vapidKey.key)),
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
        {vapidKey.loading ? (
          <Loader className="push-notifications__loader" />
        ) : vapidKey.key === '' ? (
          <Notification type="error">
            <p>Someting went wrong</p>
          </Notification>
        ) : !('PushManager' in window) || !('serviceWorker' in navigator) ? (
          <React.Fragment>
            <Notification type="message">
              <p>Your browser does not support push notifications.</p>
            </Notification>
            {idIos && <p>iOS</p>}
          </React.Fragment>
        ) : !isSubscribed ? (
          <Button
            icon="mdi/bell-outline"
            onClick={() => subscribe()}
            color="red"
            loading={loading}
          >
            Subscribe
          </Button>
        ) : (
          <React.Fragment>
            <p className="push-notifications__checked">
              <b>
                <SVG path="icon/mdi/check.svg" /> Push notifications are
                activated
              </b>
            </p>
            <Button
              layout="empty"
              icon="mdi/bell-outline"
              round
              onClick={() => unsubscribe()}
              loading={loading}
              fontWeight="normal"
              zeroPadding
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
