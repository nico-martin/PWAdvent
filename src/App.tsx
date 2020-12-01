import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider, useActions, useStoreState } from 'unistore-hooks';
import { actions, store } from '@store/index';

import './App.css';

import About from '@app/About/About';
import Calendar from '@app/Calendar/Calendar';

import Content from '@app/Content/Content';
import { State } from '@store/types';
import useWindowSize from '@app/hooks/useWindowSize';
import { Snow } from '@theme';

let startX = 0;
let currentX = 0;
const touchLength = 100;
const MOBILE_BP = 900;

const App = () => {
  const { setOffline, setMenuOpen } = useActions(actions);
  const { menuOpen } = useStoreState<State>(['menuOpen']);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [transition, setTransition] = React.useState<boolean>(false);
  const windowSize = useWindowSize();
  const [show, setShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (windowSize.width === null) {
      return;
    }
    if (windowSize.width >= MOBILE_BP && isMobile) {
      setMenuOpen(false);
      setIsMobile(false);
    } else if (windowSize.width < MOBILE_BP) {
      setTimeout(() => setTransition(true), 200);
      setIsMobile(true);
    }
    setShow(true);
  }, [windowSize]);

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
      <div
        data-menu={menuOpen ? 'open' : 'closed'}
        data-layout={isMobile ? 'mobile' : 'desktop'}
        data-layout-transition={transition}
        className="app"
        style={{ opacity: show ? 1 : 0 }}
      >
        {show && (
          <div className="app__inner">
            <About className="app__sidebar" />
            <Calendar className="app__content" />
          </div>
        )}
      </div>
      <Snow className="app__snow" />
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
