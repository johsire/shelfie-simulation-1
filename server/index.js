const express = require('express');
const bodyParser = require('body-parser');

const controller = require('./controller');

const app = express();

app.use(bodyParser.json());




const PORT = 5555;
app.listen(PORT, () => {
  console.log('Its going down on port' + ' ' + PORT + '!')
});
