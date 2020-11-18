import { openDB, DBSchema } from 'idb';
import { DayData } from '@app/types';

const dbName = 'pwadvent';

interface PWAdventDB extends DBSchema {
  days: {
    key: string;
    value: any;
  };
  page: {
    key: string;
    value: DayData;
  };
  settings: {
    key: string;
    value: any;
  };
}

const dbPromise = openDB<PWAdventDB>(dbName, 2, {
  upgrade(db, oldVersion) {
    if (oldVersion < 1) {
      db.createObjectStore('days');
      db.createObjectStore('page');
    }
    if (oldVersion < 2) {
      db.createObjectStore('settings');
    }
  },
});

export const daysDB = {
  get: async (key: string) => (await dbPromise).get('days', key),
  set: async (key: string, val: any) => (await dbPromise).put('days', val, key),
  delete: async (key: string) => (await dbPromise).delete('days', key),
};

export const pageDB = {
  get: async (key: string) => (await dbPromise).get('page', key),
  set: async (key: string, val: any) => (await dbPromise).put('page', val, key),
  delete: async (key: string) => (await dbPromise).delete('page', key),
};

export const settingsDB = {
  get: async (key: string) => (await dbPromise).get('settings', key),
  set: async (key: string, val: any) =>
    (await dbPromise).put('settings', val, key),
  delete: async (key: string) => (await dbPromise).delete('settings', key),
};
