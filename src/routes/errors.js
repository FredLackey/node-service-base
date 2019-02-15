const appRoot = require('app-root-path');
const $       = require(`${appRoot}/src/config`);

const isXhr = (req) => {
  const { headers } = req;
  return (
    req.xhr 
    || (headers['content-type'] 
      && headers['content-type'].toLowerCase() === 'application/json') 
    || (headers.accept 
      && headers.accept.toLowerCase() === 'application/json')
  );
};

const errorHandler = (err, req, res, next) => {
  if ($.dev) { console.log(err.stack); }
  if (res.headersSent) { return next(); }
  const statusCode = err.status || err.statusCode || 500;
  const message = (err && err.message) ? err.message : err;
  if (isXhr(req)) {
    return res.status(statusCode).json({ error: message });
  }
  return res.status(statusCode).render('error', { error: message });
};

module.exports = errorHandler;
