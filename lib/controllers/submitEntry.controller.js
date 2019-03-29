const palindrome = require('../services/palindrome.service');
let cacheHandler = require('../cache/cacheHandler');

// controller for submitting entry
exports.submit = (req, res, callback) => {
  if (!req) {
    return res.send('invalid entry');
  }
  var score = palindrome.palindromeCheck(req.body.word) || 0;
  let entry = {
      name: req.body.name,
      word: req.body.word,
      points: score
    };
    cacheHandler.instance().set('key', entry, 600, (err, success) => {
                   if (!err && success) {
                       callback(entry);
                   }
                 });
};
