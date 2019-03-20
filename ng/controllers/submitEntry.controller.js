const Entry = require('../models/entry.model');
const palindrome = require('../services/palindrome.service');

// controller for submitted entry
exports.submit = (req, res) => {
  if (!req) {
    console.log('invalid entry');
    return;
  }
  var score = palindrome.palindromeCheck(req.body.word) || 0;
  console.log(score);
  let entry = new Entry(
        {
            name: req.body.name,
            word: req.body.word,
            pointsq: score
        }
    );
    entry.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Entry Created successfully')
    })
};
