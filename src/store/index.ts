import { State } from './types';

import createStore, { Store } from 'unistore';
import devtools from 'unistore/devtools';

import { isDev } from '@utils/helpers';

const initialState: State = {
  offline: false,
};

export const actions = (store: Store<State>) => ({
  setOffline: (state, offline: boolean) => store.setState({ offline }),
});

export const store = isDev
  ? createStore(initialState)
  : devtools(createStore(initialState));
