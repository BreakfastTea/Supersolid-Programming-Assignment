const scoresHelper = require('../helpers/scoresHelper');

// controller for getting scores
exports.getScores = function (req, res) {
  if (!req) return res.send('error retrieving scores');
  res.send(scoresHelper.getScores());
};
