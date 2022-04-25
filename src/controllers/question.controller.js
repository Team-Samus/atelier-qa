const { Question } = require('../services');

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
    Question.markHelpful(req.params.question_id)
      .then((affectedRows) => {
        if (!affectedRows) { throw new Error('Question not found'); }
        return res.sendStatus(204);
      })
      .catch((error) => { res.status(500).send(error.message || error); });
  },

  report: (req, res) => {
    res.send('Helpful');
  },

};
