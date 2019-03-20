exports.palindromeCheck = (word) => {
  if (!word) {
    throw new Error('No word provided!');
  } else if (typeof word === 'string' || word instanceof String) {
      var re = /[\W_]/g;
      var lowRegStr = word.toLowerCase().replace(re, '');
      var reverseStr = lowRegStr.split('').reverse().join('');
      if (lowRegStr === reverseStr) {
        console.log(lowRegStr.length);
        return lowRegStr.length;
      } else {
        return null;
      }
  } else {
    throw new Error('Not a string');
  }
};
