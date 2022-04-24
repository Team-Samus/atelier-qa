const express = require('express');

const AnswersRouter = express.Router({ mergeParams: true });

// /qa/questions/:question_id/answers

AnswersRouter.get('/', (req, res) => res.status(200).send(`Question ID: ${req.params.question_id}`));
AnswersRouter.post('/', (req, res) => res.status(200).send('NEED TO ACCESS QUESTION ID'));

// /qa/answers

AnswersRouter.put('/:answer_id/helpful', (req, res) => res.status(200).send(`Answer ID: ${req.params.answer_id}`));
AnswersRouter.put('/:answer_id/report', (req, res) => res.status(200).send('Report answer'));

module.exports = AnswersRouter;
