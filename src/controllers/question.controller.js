/* eslint-disable camelcase */
const { Question } = require('../models');

module.exports = {

  findOne: (req, res) => {
    Question.findOne()
      .then((results) => { res.send(results); })
      .catch(() => { res.send('nope'); });
  },

  create: (req, res) => {
    res.send('Post');
  },

  markHelpful: (req, res) => {
    const { question_id } = req.params;
    Question.markHelpful(question_id)
      .then((affectedRows) => {
        if (!affectedRows) { throw new Error('Question not found'); }
        return res.sendStatus(204);
      })
      .catch((error) => { res.status(500).send(error.message); });
  },

  report: (req, res) => {
    Question.report(req.params.question_id)
      .then((affectedRows) => {
        if (!affectedRows) { throw new Error('Question not found'); }
        return res.sendStatus(204);
      })
      .catch((error) => { res.status(500).send(error.message); });
  },

};
