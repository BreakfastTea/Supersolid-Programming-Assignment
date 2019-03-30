//helper for storing and retrieving scores
var _scores = [];

exports.getScores = () => {
  return _scores.sort(compare).slice(0,5);
};

exports.setScore = (entry) => {
  _scores.push(entry);
};

compare = (a,b) => {
  return  b.points - a.points;
};
