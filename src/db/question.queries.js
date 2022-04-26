module.exports = {
  save: `
    INSERT INTO questions (product_id, question_body, question_date, asker_name, asker_email)
    VALUES ($1, $2, EXTRACT(EPOCH FROM now()) * 1000, $3, $4)
  `,
  markHelpful: `
    UPDATE questions SET question_helpfulness = question_helpfulness + 1 WHERE question_id = $1;
  `,
  report: `
    UPDATE questions SET reported = true WHERE question_id = $1;
  `,
  findByProduct: `
    SELECT json_build_object(
      'product_id', $1,
      'results', (
        SELECT json_agg(
          json_build_object(
            'question_id', question_id,
            'question_body', question_body,
            'question_date', TO_TIMESTAMP(question_date / 1000),
            'asker_name', asker_name,
            'question_helpfulness', question_helpfulness,
            'reported', reported,
            'answers', (
              SELECT COALESCE(
                json_object_agg(
                  answer_id, json_build_object(
                    'id', answer_id,
                    'body', body,
                    'date', TO_TIMESTAMP(date / 1000),
                    'answerer_name', answerer_name,
                    'helpfulness', helpfulness,
                    'photos', (
                      SELECT COALESCE(
                        array_agg(row_to_json(photos)), '{}'
                      ) FROM (
                        SELECT id, url FROM photos WHERE answer_id = answers.answer_id
                      ) photos
                    )
                  )
                ), '{}'
              ) FROM answers WHERE questions.question_id = answers.question_id
            )
          )
        ) FROM (
          SELECT * FROM questions WHERE product_id = $1 AND reported = false LIMIT $2 OFFSET $3
        ) questions
      )
    ) api;
  `,
};
