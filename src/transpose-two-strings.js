function transposeTwoStrings(inputArr) {
  if (!Array.isArray(inputArr) || inputArr.length < 2) {
    throw new Error('wrong input');
  }
  let result = '';
  const maxLength = inputArr[0].length > inputArr[1].length ? inputArr[0].length : inputArr[1].length;
  for (let i = 0; i < maxLength; i++) {
    const row1 = inputArr[0].hasOwnProperty(i) ? inputArr[0][i] : ' ';
    const row2 = inputArr[1].hasOwnProperty(i) ? inputArr[1][i] : ' ';
    result += `${row1} ${row2}`;
    if (maxLength > 1 && i+1 < maxLength) {
      result += '\n';
    }
  }
  return result;
}

module.exports = transposeTwoStrings;
