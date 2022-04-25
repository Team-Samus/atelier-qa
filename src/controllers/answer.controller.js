/* eslint-disable camelcase */
const { Answer } = require('../services');

module.exports = {
  findAll: (req, res) => {
    res.send('Here is an answer');
  },
  create: (req, res) => {
    res.send('Post');
  },
  markHelpful: (req, res) => {
    const { answer_id } = req.params;
    Answer.markHelpful(answer_id)
      .then((affectedRows) => {
        if (!affectedRows) throw new Error('Answer not found');
        return res.sendStatus(204);
      })
      .catch((error) => { res.status(500).send(error.message); });
  },

  report: (req, res) => {
    Answer.report(req.params.answer_id)
      .then((affectedRows) => {
        if (!affectedRows) throw new Error('Answer not found');
        return res.sendStatus(204);
      })
      .catch((error) => { res.status(500).send(error.message); });
  },
};
