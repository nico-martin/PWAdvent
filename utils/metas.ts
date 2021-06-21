import { appDescription, appTitle } from '@utils/constants';

export const metaTitle = (title: string = '') =>
  title === '' ? `${appTitle} ❄ ${appDescription}` : `${title} ❄ ${appTitle}`;
