// import React from 'react'
import axios from 'axios';

// baseUrl =
let id = product_id;
let inventory = [];


module.exports = {
  allInventory: (req, res) => {
    axios.get(baseUrl).then((response) => {
    inventory = response.data;
    res.status(200).json({
      data: 'It works!',
    })
    })

    .catch((error) => {
      return res.status(500).json({success: false, data: error});
    })
  }
}
