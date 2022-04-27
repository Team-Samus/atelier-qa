/* eslint-disable camelcase */
const { Answer } = require('../models');

module.exports = {

  findByQuestion: async (req, res) => {
    const { page, count } = req.query;
    const { question_id } = req.params;
    console.log(question_id);
    const answers = await Answer.findByQuestion(question_id, page, count);
    console.log(answers);
    if (!answers) res.sendStatus(400);
    else res.status(200).send(answers);
  },

  create: async (req, res) => {
    req.body.question_id = req.params.question_id;
    const status = await new Answer(req.body).save() ? 201 : 400;
    res.sendStatus(status);
  },

  markHelpful: async (req, res) => {
    const status = await Answer.markHelpful(req.params.answer_id) ? 204 : 400;
    res.sendStatus(status);
  },

  report: async (req, res) => {
    const status = await Answer.report(req.params.answer_id) ? 204 : 400;
    res.sendStatus(status);
  },
};
