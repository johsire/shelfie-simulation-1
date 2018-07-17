const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();


const inventoryController = require('./controllers/inventoryController');

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    console.log(dbInstance)
   app.set('db', dbInstance)})
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(`${_dirname}/../public/build`));

// router.post("/api/product", invController.create)

  // allInventory: (req, res) => {
    app.get("/api/inventory", inventoryController.getAllInventory);
    app.post("/api/product", inventoryController.create);
    // app.put("/api/inventory", inventoryController.update);

const PORT = 5555;
app.listen(PORT, () => {
  console.log('Its going down on port:' + ' ' + PORT + '!')
})
