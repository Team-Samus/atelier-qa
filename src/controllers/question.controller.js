const { Question } = require('../services');

module.exports = {
  findOne: (req, res) => {
    Question.findOne()
      .then((results) => { res.send(results) })
      .catch((err) => { res.send('nope') });
  },
  create: (req, res) => {
    res.send('Post');
  },
  markHelpful: (req, res) => {
    res.send('Report');
  },
  report: (req, res) => {
    res.send('Helpful');
  },
};
