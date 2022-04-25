const db = require('../db');

const queries = {
  markHelpful: `
    UPDATE answers
    SET helpfulness = helpfulness + 1
    WHERE answer_id = $1;
  `,
  report: `
    UPDATE answers
    SET reported = true
    WHERE question_id = $1;
  `,
};

module.exports = {
  markHelpful: (aid) => db.result(queries.markHelpful, [aid], (r) => r.rowCount),
  report: (aid) => db.result(queries.report, [aid], (r) => r.rowCount),
};
