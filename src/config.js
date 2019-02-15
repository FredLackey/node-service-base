const pkg = require('../package.json');

const DEFAULT_BASE_URL = '/';
const DEFAULT_NODE_ENV  = 'development';
const DEFAULT_NODE_PORT = 3000;

const env     = process.env.NODE_ENV || DEFAULT_NODE_ENV;
const dev     = env.toLowerCase().startsWith('dev');

module.exports = {
  baseUrl : (process.env.BASE_URL || DEFAULT_BASE_URL),
  desc    : pkg.description || pkg.name,
  dev,
  env,
  name    : pkg.name,
  port    : (process.env.NODE_PORT || DEFAULT_NODE_PORT),
  ver     : pkg.version
}
