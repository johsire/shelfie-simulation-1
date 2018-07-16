const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const dbInstance = req.app.get('db');

module.exports = {
  getAllInventory: (req, res, next) => {
    dbInstance.read_products()
      .then(() => res.send(200).send(products))
      .catch(err => {
        res.status(500).send({errorMessage: "Oh no! Something went wrong!"})
      })
  },
  create: (req, res, next) => {
    const url = req.body.data.imageUrl;
    const name = req.body.data.productName;
    const price = req.body.data.priceInput;

    db.create_product()
      .then(() => res.send(200).send(products))
      .catch(err => {
        res.status(500).send({errorMessage: "Oh no! Something went wrong!"})
      })
  },

}
