const db = require('../db');

const queries = {
  findOne: `SELECT *
    FROM questions
    LIMIT 1`,
};

module.exports = {
  findOne: () => db.any(queries.findOne),
};