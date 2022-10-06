const express = require('express');
const cors = require('cors');
require('dotenv').config();
//const db = require('./db/db-connection.js');

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

const CONTACTS = [

  { id: 1, name: 'Lisa Lee', email: 'lisalee@gmail.com', phoneNumber: "" },
  { id: 2, name: 'Eileen Long', email: 'elong@gmail.com', phoneNumber: "" },
  { id: 3, name: 'Andrea Rivera', email: 'andrearivera@gmail.com', phoneNumber: "" },
  { id: 4, name: 'Cristina Rodriguez', email: 'crodriguez@gmail.com', phoneNumber: ""},
  { id: 5, name: 'Paola Molina', email: 'pmolina@gmail.com', phoneNumber: "" },
];

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});

// create the get request
app.get('/api/contacts', cors(), async (req, res) => {
  res.json(CONTACTS);
});

// create the POST request
app.post('/api/contacts', cors(), async (req, res) => {
  const newId = CONTACTS.length + 1;
  const newContact = {
    id: newId,
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  };
  CONTACTS.push(newContact);
  //console.log(CONTACTS);
  res.json(CONTACTS);
});


// Put request - Update request - hardcore data 
app.put('/api/contacts/:contactId', cors(), async (req, res) =>{
  const contactId = req.params.contactId;
  const updateContact = { id: req.body.id, name: req.body.name, email: req.body.email, phoneNumber: req.body.phoneNumber }
  //console.log(req.params);
  // UPDATE students SET lastname = 'TestMarch' WHERE id = 1;
  console.log(contactId);
  console.log(updateContact);
  for(let contact of CONTACTS){
    if(contact.id == contactId){
      let index = CONTACTS.indexOf(contact)
      CONTACTS[index] = updateContact
    }
  }
  res.send(CONTACTS);
});

// Delete request - Hardcode data
app.delete('/api/contacts/:contactId', cors(), async (req, res) =>{
  const contactId = req.params.contactId;
  for(let contact of CONTACTS){
    if(contact.id == contactId){
      let index = CONTACTS.indexOf(contact);
      //console.log(index);
      CONTACTS.splice(index, 1);
    }
  }
  //console.log(CONTACTS);
  res.status(200).end();
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
