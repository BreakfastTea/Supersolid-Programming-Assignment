const Entry = require('../models/entry.model');


// controller for getting scores
exports.getScores = function (req, res) {
    Entry.find({}, 'name points').sort({points: 'desc'}).limit(5).exec(function (err, data) {
        if (err) return next(err);
        console.log(data);
        res.send(data);
    });
};
