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
  it('UAT1.2: When user pass ["ab","cd"], it should return "a c\nb d"', () => {
    expect(transposeTwoStrings(['ab', 'cd'])).toBe('a c\nb d');
  });
  it('UAT1.3: When user pass ["ab","c"], it should return "a c\nb  "', () => {
    expect(transposeTwoStrings(['ab', 'c'])).toBe('a c\nb  ');
  });
  it('UAT2.4: When user pass ["Ab","Cd"], it should return "A C\nb d"', () => {
    expect(transposeTwoStrings(['Ab', 'Cd'])).toBe('A C\nb d');
  });
  it('UAT2.5: When user pass ["Hey all","Please"], it should return "H P\ne l\ny e\n  a\na s\nl e\nl  "', () => {
    expect(transposeTwoStrings(['Hey all', 'Please'])).toBe('H P\ne l\ny e\n  a\na s\nl e\nl  ');
  });
});
