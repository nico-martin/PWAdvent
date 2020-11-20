import './styles.css';
import './styles/prism.css';
import './styles/gutenberg-content.css';
import './App';

import { isDev, windowResize } from '@utils/helpers';

windowResize();
//window.setTimeout(() => windowResize(), 1000);
window.addEventListener('resize', () => windowResize());

if (!isDev) {
  'serviceWorker' in navigator &&
    navigator.serviceWorker.register('service-worker.js');

  (window as any).installPrompt = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    (window as any).installPrompt = e;
  });
}
