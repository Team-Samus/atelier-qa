const express = require('express');
const QuestionsRouter = require('./questions');
const AnswersRouter = require('./answers');

const Router = express.Router();

Router.use('/questions', QuestionsRouter);
Router.use('/answers', AnswersRouter);

module.exports = Router;
