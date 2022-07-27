import Dexie from 'dexie';

export const db = new Dexie('InstgramNewDev');
db.version(3).stores({
  bio: ',name, about',
  gallery: '++id, url',
});
