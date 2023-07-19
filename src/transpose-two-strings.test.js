const transposeTwoStrings = require('./transpose-two-strings');

describe('STORY 1', () => {
  it('UAT1.1: When user pass no input, it should return an exception', () => {
    expect(() => transposeTwoStrings()).toThrow();
  });
  it('UAT1.2: When user pass empty array, it should return an exception', () => {
    expect(() => transposeTwoStrings([])).toThrow();
  });
  it('UAT1.3: When user pass string, it should return an exception', () => {
    expect(() => transposeTwoStrings('string')).toThrow();
  });
  it('UAT1.4: When user pass array with only one string, it should return an exception', () => {
    expect(() => transposeTwoStrings(['string'])).toThrow();
  });
});
describe('STORY 2', () => {
  it('UAT1.1: When user pass ["a","a"], it should return "a a"', () => {
    expect(transposeTwoStrings(['a', 'a'])).toBe('a a');
  });
});
