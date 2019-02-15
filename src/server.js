const $           = require('./config');
const express     = require('express');
const routes      = require('./routes');
const errHandler  = require('./routes/errors');

const app = express();
app.use(express.json());

app.use(routes);
app.use(errHandler);

app.listen($.port, err => {
  console.log(`${$.desc}`);
  console.log(`BASE: ${$.baseUrl}`);
  console.log(`PORT: ${$.port}`);
});

