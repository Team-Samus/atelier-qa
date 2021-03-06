/* eslint-disable camelcase */
const { Question } = require('../models');

module.exports = {

  findByProduct: async (req, res) => {
    const { product_id, page, count } = req.query;
    const questions = await Question.findByProduct(product_id, page, count);

    if (!questions) res.sendStatus(400);
    else res.status(200).send(questions);
  },

  create: async (req, res) => {
    const status = await new Question(req.body).save() ? 204 : 400;
    res.sendStatus(status);
  },

  markHelpful: async (req, res) => {
    const status = await Question.markHelpful(req.params.question_id) ? 204 : 400;
    res.sendStatus(status);
  },

  report: async (req, res) => {
    const status = await Question.report(req.params.question_id) ? 204 : 400;
    res.sendStatus(status);
  },

};
