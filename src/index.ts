import './styles.css';
import './App';
import { isDev } from '@utils/helpers';

if (!isDev) {
  'serviceWorker' in navigator &&
    navigator.serviceWorker.register('service-worker.js');

  // @ts-ignore
  window.installPrompt = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    // @ts-ignore
    window.installPrompt = e;
  });
}
