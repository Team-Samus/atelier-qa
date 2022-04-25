const db = require('../db');

const queries = {
  findOne: `
    SELECT *
    FROM questions
    LIMIT 1`,
  markHelpful: `
    UPDATE questions
    SET question_helpfulness = question_helpfulness + 1
    WHERE question_id = $1;
  `,
  report: `
    UPDATE questions
    SET reported = true
    WHERE question_id = $1;
  `,
};

module.exports = {
  findOne: () => db.any(queries.findOne),
  markHelpful: (qid) => db.result(queries.markHelpful, [qid], (r) => r.rowCount),
  report: (qid) => db.result(queries.report, [qid], (r) => r.rowCount),
};
