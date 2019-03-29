//helper for storing and retrieving scores
var _scores = [];

exports.getScores = () => {
  return _scores.slice(0,5);
};

exports.setScore = (entry) => {
  _scores.push(entry);
};
