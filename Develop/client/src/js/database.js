import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>
// *** start Liz added code - this is from 19-28 base code ***
{
  console.log('Post to the database');

  // Create a connection to the database database and version we want to use.
  const jateDB = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDB.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .add() method on the store and pass in the content. 
  // ???Is content the correct value here?
  const request = store.add({ content: content });

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);

  // add logic so if there is no content record the console error below
  if (!content) {
    console.error('putDb not implemented')
  };
  
};
;



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);

  // add logic so if there is no content record the console error below
  if (!content) {
    console.error('getDb not implemented')
  };

  return result;

};

// *** end Liz added code - this is from 19-28 base code ***


initdb();
