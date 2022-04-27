module.exports = {
  markHelpful: `
    UPDATE answers SET helpfulness = helpfulness + 1 WHERE answer_id = $1;
  `,
  report: `
    UPDATE answers SET reported = true WHERE question_id = $1;
  `,
  save: `
    INSERT INTO answers (question_id, body, date, answerer_name, answerer_email)
    VALUES ($1, $2, EXTRACT(EPOCH FROM now()) * 1000, $3, $4)
    RETURNING answer_id;
  `,
  addPhoto: `
    INSERT INTO photos (answer_id, url)
    VALUES ($1, $2);
  `,
  findByQuestion: `
    SELECT json_agg(
      json_build_object(
        'question', $1,
        'page', $2
      )
    ) AS result;


  `,
};
