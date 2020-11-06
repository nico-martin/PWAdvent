import { openDB, DBSchema } from 'idb';

const dbName = 'pwadvent';

interface PWAdventDB extends DBSchema {
  days: {
    key: string;
    value: any;
  };
}

const dbPromise = openDB<PWAdventDB>(dbName, 1, {
  upgrade(db, oldVersion) {
    if (oldVersion < 1) {
      db.createObjectStore('days');
    }
  },
});

export const daysDB = {
  get: async (key: string) => (await dbPromise).get('days', key),
  set: async (key: string, val: any) => (await dbPromise).put('days', val, key),
  delete: async (key: string) => (await dbPromise).delete('days', key),
};
