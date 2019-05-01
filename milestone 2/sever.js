import express, { static } from 'express';
const app = express();


// use this library to interface with SQLite databases: https://github.com/mapbox/node-sqlite3
import { Database } from 'sqlite3';
const db = new Database('pets.db');
app.use(static('static_files'));

app.get('/users', (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all('SELECT name FROM users_to_pets', (err, rows) => {
    console.log(rows);
    const allUsernames = rows.map(e => e.name);
    console.log(allUsernames);
    res.send(allUsernames);
  });
});


// POST data about a user to insert into the database
// (note that this will insert duplicate entries!)
//
// To test, use the web frontend interface at:
//   http://localhost:3000/petsapp.html
// use this library to parse HTTP POST requests
import { urlencoded } from 'body-parser';
app.use(urlencoded({extended: true})); // hook up with your app
app.post('/users', (req, res) => {
  console.log(req.body);

  db.run(
    'INSERT INTO users_to_pets VALUES ($name, $job, $pet)',
    // parameters to SQL query:
    {
      $name: req.body.name,
      $job: req.body.job,
      $pet: req.body.pet,
    },
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/users)'});
      } else {
        res.send({message: 'successfully run app.post(/users)'});
      }
    }
  );
});


// GET profile data for a user
//
// To test, open these URLs in your browser:
//   http://localhost:3000/users/Philip
//   http://localhost:3000/users/Carol
//   http://localhost:3000/users/invalidusername
app.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid; // matches ':userid' above

  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all(
    'SELECT * FROM users_to_pets WHERE name=$name',
    // parameters to SQL query:
    {
      $name: nameToLookup
    },
    // callback function to run when the query finishes:
    (err, rows) => {
      console.log(rows);
      if (rows.length > 0) {
        res.send(rows[0]);
      } else {
        res.send({}); // failed, so return an empty object instead of undefined
      }
    }
  );
});

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
