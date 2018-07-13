const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');

const app = express();
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set('db', dbInstance));

app.use(bodyParser.json());
app.use(cors());




const PORT = 5555;
app.listen(PORT, () => {
  console.log('Its going down on port' + ' ' + PORT + '!')
});
