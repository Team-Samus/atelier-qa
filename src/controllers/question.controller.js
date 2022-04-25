module.exports = {
  findOne: (req, res) => {
    res.send('Here is a question');
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
