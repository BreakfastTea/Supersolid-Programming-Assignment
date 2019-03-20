const Submitted = require('../models/submitted.model');

exports.submit = function (req, res) {
  if (!req) {
    console.log('invalid entry')
    return;
  }
    let entry = new Submitted(
        {
            name: req.body.name,
            word: req.body.word
        }
    );
    entry.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Entry Created successfully')
    })
};
