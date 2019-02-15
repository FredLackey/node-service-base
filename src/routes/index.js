const $       = require('../config');
const router  = require('express').Router();

const api     = require('./api');
router.use(`${$.baseUrl}api`, api);

router.get(`${$.baseUrl}`, (req, res) => {
  res.send(`${$.desc} v${$.ver} : ${(new Date()).toISOString()}`);
});

module.exports = router;
