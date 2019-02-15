const appRoot = require('app-root-path');
const router  = require('express').Router();
const { sample } = require(`${appRoot}/src/lib/controllers`);

router.get('/', sample.doSomething);

module.exports = router;
