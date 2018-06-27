const express = require("express");
const knex = require("../db/client");
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
