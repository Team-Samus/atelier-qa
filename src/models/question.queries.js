module.exports = {
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
  create: `
    INSERT INTO questions (product_id, question_body, question_date, asker_name, asker_email, reported, question_helpfulness)
    VALUES ($1, $2, EXTRACT(EPOCH from CURRENT_TIMESTAMP)::bigint * 1000, $3, $4, false, 0)
    RETURNING question_id
  `,
};
