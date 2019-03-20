const Entry = require('../models/entry.model');
const palindrome = require('../services/palindrome.service');

// controller for submitting entry
exports.submit = (req, res) => {
  if (!req) {
    return res.send('invalid entry');
  }
  var score = palindrome.palindromeCheck(req.body.word) || 0;
  let entry = new Entry(
        {
            name: req.body.name,
            word: req.body.word,
            points: score
        }
    );
    entry.save((err) => {
        if (err) {
            return next(err);
        }
        return res.send(score.toString());
    })
};
