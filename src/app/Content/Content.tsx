import React from 'react';
import { useParams, useHistory, Route, Switch } from 'react-router-dom';

import './Content.css';

import { useStoreState } from 'unistore-hooks';
import { State } from '@store/types';
import { ContentModal } from '@theme';
import { Day } from '@app/types';

import ContentCalendar from './ContentCalendar';
import ContentPage from './ContentPage';

const Content = ({ className = '' }: { className?: string }) => {
  const { page = null, slug = null } = useParams();
  const { push } = useHistory();

  const { days: storeDays } = useStoreState<State>(['days']);

  const active: boolean = React.useMemo(() => !!page, [page]);
  const activeDay: Day = React.useMemo(
    () => (active !== false && page === 'day' && storeDays[slug]) || false,
    [active, storeDays[slug], slug]
  );

  if (!active) {
    return null;
  }

  if (activeDay) {
    return (
      <ContentModal
        title={activeDay.data.title}
        onClose={() => push('/')}
        loading={activeDay.loading}
      >
        <ContentCalendar day={activeDay.data} number={slug} />
      </ContentModal>
    );
  }

  if (page === 'email-notification') {
    return (
      <ContentModal
        className={className}
        onClose={() => push('/')}
        title="Email Notification"
        size="small"
      >
        {slug === 'success' ? (
          <p>
            Thank you very much. Your email address has been successfully
            verified.
          </p>
        ) : slug === 'unsubscribe' ? (
          <p>You have been successfully signed out.</p>
        ) : (
          <p>Ooops.. Something went wrong.</p>
        )}
      </ContentModal>
    );
  }

  return (
    <ContentPage className={className} slug={page} onClose={() => push('/')} />
  );
};

export default props => (
  <Switch>
    <Route path="/:page/:slug?/">
      <Content {...props} />
    </Route>
  </Switch>
);
