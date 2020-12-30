const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('testDB.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the Test SQlite database.');
});

db.run(`CREATE TABLE results(name text,
		age text,
		sex text)`);

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});