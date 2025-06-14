const path = require('path');

module.exports = {
  port: process.env.PORT || 3000,
  views: path.join(__dirname, '..', 'views'),
  static: path.join(__dirname, '..', 'public'),
  env: process.env.NODE_ENV || 'development'
};
