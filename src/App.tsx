import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, useActions } from 'unistore-hooks';
import { actions, store } from '@store/index';

import './App.css';
import Calendar from '@app/calendar/Calendar';
import About from '@app/About';

const App = () => {
  const { setOffline } = useActions(actions);

  React.useEffect(() => {
    setOffline(!navigator.onLine);
    window.addEventListener('online', () => setOffline(false), false);
    window.addEventListener('offline', () => setOffline(true), false);
  }, []);

  return (
    <div className="app">
      <About className="app__about" />
      <Calendar className="app__clendar" />
    </div>
  );
};

ReactDOM.render(
  <Provider value={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
