import { State } from './types';

import createStore, { Store } from 'unistore';
import devtools from 'unistore/devtools';

import { isDev, zeroPad } from '@utils/helpers';
import { daysDB } from '@store/idb';
import { CALENDAR, DATE_TODAY, YEAR } from '@utils/calendar';
import dayjs from '@utils/dayjs';

import { apiBase } from '@utils/constants';

const initialDays = {};
CALENDAR.map(day => {
  initialDays[day] = {
    loading: false,
    error: '',
    active: false,
    data: {
      date: dayjs(`${YEAR}-12-${zeroPad(day, 2)}`),
      title: '',
      content: '',
    },
  };
});

const initialState: State = {
  offline: false,
  menuOpen: false,
  days: initialDays,
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

export const actions = (store: Store<State>) => ({
  setOffline: (state, offline: boolean) => store.setState({ offline }),
  loadDay: async ({ days }, day: number) => {
    const storeDay = days[day];

    if (
      !storeDay ||
      !storeDay.data ||
      !storeDay.data.date ||
      storeDay.data.date.isAfter(DATE_TODAY)
    ) {
      return;
    }

    setDay(day, store, {
      loading: true,
    });

    let dayObject = await daysDB.get(String(day));
    if (!dayObject) {
      const resp = await fetch(
        `${apiBase}wp-json/advent-calendar/v1/days/${day}/`
      );

      // not yet published
      if (resp.status === 401) {
        setDay(day, store, {
          loading: false,
        });
        return;
      }

      // not found
      if (!resp.ok) {
        setDay(day, store, {
          loading: false,
          error: 'not found',
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
      };
    }

    setDay(day, store, {
      loading: false,
      active: true,
      data: dayObject,
    });
  },
  setMenuOpen: (state, menuOpen: boolean) => store.setState({ menuOpen }),
});

export const store = isDev
  ? createStore(initialState)
  : devtools(createStore(initialState));
