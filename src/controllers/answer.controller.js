module.exports = {
  findAll: (req, res) => {
    res.send('Here is an answer');
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
