let cacheHandler = require('../cache/cacheHandler');

// controller for getting scores
exports.getScores = (req, res) => {
  cacheHandler.instance().get('key', (err, value) => {
    if (err) {
      return res.send('error retrieving data');
    } else {
      console.log('ji');
    }
  });
};
