import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider, useActions, useStoreState } from 'unistore-hooks';
import { actions, store } from '@store/index';

import './App.css';

import About from '@app/About';
import Calendar from '@app/Calendar/Calendar';

import Content from '@app/Content';
import { State } from '@store/types';

let startX = 0;
let currentX = 0;
const touchLength = 100;

const App = () => {
  const { setOffline, setMenuOpen } = useActions(actions);
  const { menuOpen } = useStoreState<State>(['menuOpen']);

  React.useEffect(() => {
    setOffline(!navigator.onLine);
    window.addEventListener('online', () => setOffline(false), false);
    window.addEventListener('offline', () => setOffline(true), false);
  }, []);

  const touchStart = e => {
    startX = e.touches[0].clientX;
  };
  const touchEnd = () => {
    const moved = currentX === 0 ? 0 : currentX - startX;
    if (moved <= touchLength * -1) {
      setMenuOpen(false);
    } else if (moved >= touchLength) {
      setMenuOpen(true);
    }
    startX = 0;
    currentX = 0;
  };
  const touchMove = e => {
    currentX = e.touches[0].clientX;
  };

  React.useEffect(() => {
    window.addEventListener('touchstart', touchStart);
    window.addEventListener('touchend', touchEnd);
    window.addEventListener('touchmove', touchMove);
    return () => {
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchend', touchEnd);
      window.removeEventListener('touchmove', touchMove);
    };
  }, []);

  return (
    <React.Fragment>
      <Content className="app-content" />
      <div data-menu={menuOpen ? 'open' : 'closed'} className="app">
        <div className="app__inner">
          <About className="app__sidebar" />
          <Calendar className="app__content" />
        </div>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(
  <Router>
    <Provider value={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector('#app')
);
