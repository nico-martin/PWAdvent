import { shuffle, trailingSlashIt } from '@utils/helpers';

export const apiBase = trailingSlashIt(API_BASE);
export const apiKey = API_KEY;
export const appTitle = APP_TITLE;
export const appDescription = APP_DESCRIPTION;
export const registerSw = REGISTER_SW;

const random = false;
const twoToTwentythree = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
];
const shuffeled = random
  ? shuffle(twoToTwentythree)
  : [
      6,
      21,
      12,
      20,
      14,
      4,
      19,
      16,
      15,
      2,
      17,
      9,
      8,
      13,
      11,
      5,
      22,
      18,
      3,
      23,
      7,
      10,
    ];

export const daysOrder = [1, ...shuffeled, 24];
export const daysOrderCorrect = [1, ...twoToTwentythree, 24];

export const VIEW_TYPES = {
  LIST: 'list',
  CALENDAR: 'calendar',
};

export const SUBJECTS = [
  'Add to Homescreen',
  'Sharing on the web',
  'Shortcuts',
  'Service Worker',
  'ServiceWorker Cache',
  'IndexedDB',
  'Store-Managers',
  'Background-Sync',
  'Push Notifications',
  'Media Session API',
  'Shape Detection API',
  'Wake Lock API',
  'Payment Request API',
  'Vibration',
  'Dual Screen Support',
  'Contact Picker API',
  'Credential Management API',
  'Font Access API',
  'Web MIDI',
  'File System Access API',
  'File Handling API',
  'Web OTP API',
  'Badging API',
  'WASM',
];
