import React from 'react';

export const zeroPad = (number: number, length: number): string =>
  number.toString().padStart(length, '0');

// @ts-ignore
export const isDev = (): boolean => String(IS_DEV) === 'true';
