import dayjs from 'dayjs';

export const YEAR: number = 2020;
export const CALENDAR: number[] = [
  1,
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
  24,
];

export const DATE_TODAY: dayjs.Dayjs = TODAY ? dayjs(TODAY) : dayjs();
export const DATE_START: dayjs.Dayjs = dayjs('2020-12-01');

export const THEMEN: string[] = [
  'manifest',
  'sharing',
  'shortcuts / badging',
  'ServiceWorker',
  'SW Cache',
  'IndexedDB',
  'persistent Storage',
  'BKG sync',
  'Push Notifications',
  'Push Trigger',
  'Media Session',
  'native file system',
  'Wake Lock',
  'font access',
  'Orientation lock',
  'Multi window',
  'credentials',
  'payments',
  'Web Midi',
  'shape detection',
  'contact picker',
  'sms reciever',
  'Paw Clipboard API',
  'WASM',
];
