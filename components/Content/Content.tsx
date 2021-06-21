//import { useParams, useHistory, Route, Switch } from 'react-router-dom';
import Head from 'next/head';
import React from 'react';
import { useStoreState, useActions } from 'unistore-hooks';
import { ContentModal } from '@theme';
import { actions } from '@store/index';
import { State } from '@store/types';
import { Day } from '@app/types';
import { metaTitle } from '@utils/metas';
import styles from './Content.module.css';
import ContentCalendar from './ContentCalendar';
import ContentPage from './ContentPage';

const Content = ({ className = '' }: { className?: string }) => {
  const { loadDay } = useActions(actions);
  const { page = null, slug = null } = useParams();
  const { push } = useHistory();

  const { days: storeDays } = useStoreState<State>(['days']);

  const active: boolean = React.useMemo(() => !!page, [page]);
  const activeDay: Day = React.useMemo(
    () => (active !== false && page === 'day' && storeDays[slug]) || false,
    [active, storeDays[slug], slug]
  );

  React.useEffect(() => {
    activeDay && loadDay(slug);
  }, [slug]);

  if (!active) {
    return (
      <Head>
        <title>{metaTitle()}</title>
      </Head>
    );
  }

  if (activeDay) {
    return (
      <ContentModal
        title={
          activeDay.error !== '' ? `Day ${slug}` : activeDay.data.title || ''
        }
        onClose={() => push('/')}
        loading={activeDay.loading}
      >
        <ContentCalendar
          day={activeDay.data}
          number={slug}
          error={activeDay.error}
        />
      </ContentModal>
    );
  }

  if (page === 'email-notification') {
    return (
      <ContentModal
        className={className}
        onClose={() => push('/')}
        title="Email Notification"
        full={false}
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

export default (props) => (
  <Switch>
    <Route path="/:page?/:slug?/">
      <Content {...props} />
    </Route>
  </Switch>
);
