const express = require('express');
// const {getCryptocurrencyPriceData} = require("../utils/cryptocurrencyPrice");
const router = express.Router();
const controller = require('../controllers/cryptocurrency')

router.get('/', controller.get);

module.exports = router;
