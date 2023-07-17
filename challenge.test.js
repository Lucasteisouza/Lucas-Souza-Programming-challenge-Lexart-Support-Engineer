const reassembleArray = require('./challenge');

describe('Tests general functionality of reassembleArray function', () => {
  it('should return an object', () => {
    expect(typeof reassembleArray([1, 'a', 3])).toBe('object');
  });
  it('should return an object with a numbers property', () => {
    expect(reassembleArray([1, 'a', 3]).hasOwnProperty('numbers')).toBe(true);
  });
  it('should return an object with a strings property', () => {
    expect(reassembleArray([1, 'a', 3]).hasOwnProperty('strings')).toBe(true);
  });
  it('should return an object with a highest property', () => {
    expect(reassembleArray([1, 'a', 3]).hasOwnProperty('highest')).toBe(true);
  });
  it('should return specific values for numbers, strings, and highest properties', () => {
    expect(reassembleArray([1, 'a', 3])).toEqual({
      numbers: [1, 3],
      strings: ['a'],
      highest: 3,
    });
  });
  it('should return an empty array for numbers and a string for highest if no numbers are in the array', () => {
    expect(reassembleArray(['a', 'b', 'c'])).toEqual({
      numbers: [],
      strings: ['a', 'b', 'c'],
      highest: 'No numbers in array',
    });
  });
  it('should throw an error if the input array has a value different than strings or numbers', () => {
    expect(() => reassembleArray([1, 'a', 3, true])).toThrow();
  });

});