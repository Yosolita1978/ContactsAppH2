const express = require('express');
const cors = require('cors');
require('dotenv').config();
//const db = require('./db/db-connection.js');

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});

// create the get request
app.get('/api/contacts', cors(), async (req, res) => {
  const CONTACTS = [

      { id: 1, name: 'Lisa Lee', email: 'lisalee@gmail.com', phoneNumber: "" },
      { id: 2, name: 'Eileen Long', email: 'elong@gmail.com', phoneNumber: "" },
      { id: 3, name: 'Andrea Rivera', email: 'andrearivera@gmail.com', phoneNumber: "" },
      { id: 4, name: 'Cristina Rodriguez', email: 'crodriguez@gmail.com', phoneNumber: ""},
      { id: 5, name: 'Paola Molina', email: 'pmolina@gmail.com', phoneNumber: "" },
  ];
  res.json(CONTACTS);
  // try {
  //   const { rows: students } = await db.query('SELECT * FROM students');
  //   res.send(students);
  // } catch (e) {
  //   return res.status(400).json({ e });
  // }
});

// create the POST request
// app.post('/api/students', cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
