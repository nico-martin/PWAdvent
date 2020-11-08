import React from 'react';
import { useParams, useHistory, Route, Switch } from 'react-router-dom';

import './Content.css';

import { useStoreState, useActions } from 'unistore-hooks';
import { State } from '@store/types';
import { ContentModal, Loader } from '@theme';
import { Day } from '@app/types';

import ContentCalendar from './Content/ContentCalendar';

const Content = ({ className = '' }: { className?: string }) => {
  const { page = null, day = null } = useParams();
  const { push } = useHistory();

  const { days: storeDays } = useStoreState<State>(['days']);

  const active: boolean = React.useMemo(() => !!page, [page]);
  const activeDay: Day = React.useMemo(
    () => (active !== false && storeDays[day]) || false,
    [active, storeDays[day], day]
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
        <ContentCalendar day={activeDay.data} number={day} />
      </ContentModal>
    );
  }

  return (
    <ContentModal
      className={className}
      onClose={() => push('/')}
      title={`TITLE - ${page}`}
    >
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </ContentModal>
  );
};

export default props => (
  <Switch>
    <Route path="/:page/:day?/">
      <Content {...props} />
    </Route>
  </Switch>
);
