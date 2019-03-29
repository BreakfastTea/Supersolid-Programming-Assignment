const palindrome = require('../services/palindrome.service');
let scoresHelper = require('../helpers/scoresHelper');

// controller for submitting entry
exports.submit = (req, res) => {
  if (!req) {
    return res.send('invalid entry');
  }
  var score = palindrome.palindromeCheck(req.body.word) || 0;
  let entry = {
    name: req.body.name,
    word: req.body.word,
    points: score
  };
  scoresHelper.setScore(entry);
  return res.send(score.toString());
};
