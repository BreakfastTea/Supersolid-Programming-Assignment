const scoresHelper = require('../helpers/scoresHelper');

// controller for getting scores
exports.getScores = function (req, res) {
  res.send(scoresHelper.getScores());
};
