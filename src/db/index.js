const options = { capSQL: true };

const db_config = {
  user: process.env.DB_USER || 'root',
  database: process.env.DB_NAME || 'qa',
  port: process.env.DB_PORT || '5432'
}

module.exports = require('pg-promise')(options)(db_config);