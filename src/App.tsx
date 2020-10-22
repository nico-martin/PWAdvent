import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider, useActions } from 'unistore-hooks';
import { actions, store } from '@store/index';

import './App.css';

import About from '@app/About';
import { CALENDAR } from '@utils/calendar';
import CalendarDay from '@app/calendar/CalendarDay';
import { zeroPad } from '@utils/helpers';
import FooterMenu from '@app/FooterMenu';
import Content from '@app/Content';

const App = () => {
  const { setOffline } = useActions(actions);

  React.useEffect(() => {
    setOffline(!navigator.onLine);
    window.addEventListener('online', () => setOffline(false), false);
    window.addEventListener('offline', () => setOffline(true), false);
  }, []);

  return (
    <div className="app">
      <Content className="app__content" />
      <div className="app__grid app-grid">
        <About
          style={{ gridArea: 'about' }}
          className="app-grid__item app-grid__item--about"
        />
        {CALENDAR.map(day => (
          <div
            style={{ gridArea: `cal${zeroPad(day, 2)}` }}
            className={`app-grid__item app-grid__item--calendar app-grid__item--calendar-${day}`}
          >
            <CalendarDay day={day} />
          </div>
        ))}
      </div>
      <footer className="app__footer">
        <FooterMenu className="app__footer-manu" />
      </footer>
    </div>
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
