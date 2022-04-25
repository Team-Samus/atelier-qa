const { questions, answers } = require('./controllers');

module.exports = require('express').Router()
  .get('/questions', questions.findOne)
  .post('/questions', questions.create)
  .put('/questions/:question_id/helpful', questions.markHelpful)
  .put('/questions/:question_id/report', questions.report)
  .get('/questions/:question_id/answers', answers.findAll)
  .post('/questions/:question_id/answers', answers.create)
  .put('/answers/:answer_id/helpful', answers.markHelpful)
  .put('/answers/:answer_id/report', answers.report);
