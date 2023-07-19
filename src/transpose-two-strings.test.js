const transposeTwoStrings = require('./transpose-two-strings');

describe('STORY 1', () => {
  it('UAT1.1: When user pass no input, it should return an exception', () => {
    expect(() => transposeTwoStrings()).toThrow();
  });
});
