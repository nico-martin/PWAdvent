import { State } from './types';

import createStore, { Store } from 'unistore';
import devtools from 'unistore/devtools';

import { isDev, zeroPad } from '@utils/helpers';
import { daysDB, pageDB } from '@store/idb';
import {
  CALENDAR,
  DATE_START,
  DATE_TODAY,
  DATE_TODAY_ZERO,
  YEAR,
} from '@utils/calendar';
import dayjs from '@utils/dayjs';

import { apiBase, apiKey } from '@utils/constants';

const initialDays = {};
CALENDAR.map(day => {
  initialDays[day] = {
    loading: false,
    error: '',
    data: {
      date: `${YEAR}-12-${zeroPad(day, 2)}`,
      title: '',
      content: '',
    },
  };
});

const initialState: State = {
  offline: false,
  menuOpen: DATE_TODAY.isBefore(DATE_START),
  days: initialDays,
  page: {
    loading: false,
    slug: '',
    data: {
      title: '',
      content: '',
    },
  },
};

const setDay = (day: number, store: Store<State>, value = {}): void => {
  const state = store.getState();
  const daysNow = state.days;
  store.setState({
    days: {
      ...daysNow,
      [day]: {
        ...daysNow[day],
        ...value,
      },
    },
  });
};

const setPage = (
  slug: string,
  store: Store<State>,
  title: string,
  content: string
): void => {
  const state = store.getState();
  if (state.page.slug !== slug) {
    return;
  }
  store.setState({
    page: {
      ...state.page,
      loading: false,
      data: {
        title,
        content,
      },
    },
  });
};

export const actions = (store: Store<State>) => ({
  setOffline: (state, offline: boolean) => store.setState({ offline }),
  loadDay: async ({ days }, day: number) => {
    const storeDay = days[day];

    if (!storeDay || !storeDay.data || !storeDay.data.date) {
      setDay(day, store, {
        loading: false,
        error: 'Something went wrong',
      });
      return;
    }

    // check if API has already released article
    if (
      dayjs(storeDay.data.date)
        .tz('Antarctica/McMurdo', true)
        .isAfter(DATE_TODAY_ZERO)
    ) {
      setDay(day, store, {
        loading: false,
        error: 'This article is not yet published.',
      });
      return;
    }

    setDay(day, store, {
      loading: true,
      error: '',
    });

    let dayObject = await daysDB.get(String(day));
    if (dayObject) {
      setDay(day, store, {
        loading: false,
        data: dayObject,
      });
    }

    const resp = await fetch(
      `${apiBase}wp-json/advent-calendar/v1/days/${day}/${
        apiKey ? `?apiKey=${apiKey}` : ''
      }`
    );

    // not found
    if (!resp.ok && !dayObject) {
      setDay(day, store, {
        loading: false,
        error: 'There is no Article for this day.',
      });
      return;
    }

    // ok
    const respJson = await resp.json();

    dayObject = {
      ...storeDay.data,
      title: respJson.title,
      excerpt: respJson.excerpt,
      content: respJson.content,
      author: respJson.author,
      image: respJson.image,
      source: respJson.source,
    };
    //}

    setDay(day, store, {
      loading: false,
      data: dayObject,
    });
    await daysDB.set(String(day), { ...dayObject });
  },
  setMenuOpen: (state, menuOpen: boolean) => store.setState({ menuOpen }),
  loadPage: async (state, slug: string) => {
    store.setState({ page: { ...state.page, loading: true, slug } });
    const content = await pageDB.get(slug);
    if (content) {
      setPage(slug, store, content.title, content.content);
    }

    const resp = await fetch(
      `${apiBase}wp-json/advent-calendar/v1/page/${slug}/`
    );
    if (resp.status !== 200 && !content) {
      setPage(
        slug,
        store,
        'Error 404',
        'The Page you are looking for des not exist'
      );
      return;
    }

    const respJson = await resp.json();
    setPage(slug, store, respJson.title, respJson.content);

    await pageDB.set(slug, {
      title: respJson.title,
      contsnt: respJson.content,
    });
  },
});

export const store = isDev
  ? createStore(initialState)
  : devtools(createStore(initialState));
