import { shuffle, trailingSlashIt } from '@utils/helpers';

export const apiBase = trailingSlashIt(API_BASE);
export const apiKey = API_KEY;
export const appTitle = APP_TITLE;
export const appDescription = APP_DESCRIPTION;
export const registerSw = REGISTER_SW;

console.log({ registerSw });

const random = false;
const shuffeled = random
  ? shuffle([
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
    ])
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
