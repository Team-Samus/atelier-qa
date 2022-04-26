/* eslint-disable camelcase */
const { Question } = require('../models');

class QuestionController {
  static async findByProduct(req, res) {
    const { product_id, page, count } = req.query;
    const offset = (count - 1) * page;
    const questions = await Question.findByProduct(product_id, offset, count);

    if (!questions) res.sendStatus(400);
    else res.status(200).send(questions);
  }

  static async create(req, res) {
    const status = await new Question(req.body).save() ? 204 : 400;
    res.sendStatus(status);
  }

  static async markHelpful(req, res) {
    const status = await Question.markHelpful(req.params.question_id) ? 204 : 400;
    res.sendStatus(status);
  }

  static async report(req, res) {
    const status = await Question.report(req.params.question_id) ? 204 : 400;
    res.sendStatus(status);
  }
}

module.exports = QuestionController;
