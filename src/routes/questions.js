const express = require('express');
const AnswersRouter = require('./answers');

const QuestionsRouter = express.Router();

// /qa/questions/

QuestionsRouter.get('/', (req, res) => res.send('Get a question'));
QuestionsRouter.post('/', (req, res) => res.send('Post a question'));
QuestionsRouter.put('/:question_id/helpful', (req, res) => res.send('Mark helpful'));
QuestionsRouter.put('/:question_id/report', (req, res) => res.send('Report question'));

QuestionsRouter.use('/:question_id/answers', AnswersRouter);

module.exports = QuestionsRouter;
