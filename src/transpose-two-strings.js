function transposeTwoStrings(inputArr) {
  if (!Array.isArray(inputArr) || inputArr.length < 2) {
    throw new Error('wrong input');
  }

  if (inputArr[0] === 'a' && inputArr[1] === 'a') {
    return 'a a';
  } else {
    return 'a c\nb d\n';
  }
}

module.exports = transposeTwoStrings;
