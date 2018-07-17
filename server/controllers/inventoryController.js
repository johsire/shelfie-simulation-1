const express = require('express');
require('dotenv').config();

module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { imageUrl, productName, priceInput } = req.body;

    dbInstance.create_product([imageUrl, productName, priceInput])
      // .then(() => res.sendStatus(200).send(products))
      .then(data => {
        res.status(200).json({
          product: data[0],
        })
      })
      .catch(err => {
        res.status(500).send({errorMessage: "Oh no! Something went wrong!"});
      });
  },

  getAllInventory: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // console.log('before get_products', req);
    dbInstance.get_products()
      .then(data => {
        console.log('after get_products', data);
        res.status(200).json({
          inventory: data,
        })
      })
      .catch(err => {
        res.status(500).send({errorMessage: "Oh no! Something went wrong!"})
      })
  },

}