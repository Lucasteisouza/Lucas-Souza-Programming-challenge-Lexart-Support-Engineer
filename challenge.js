const reassembleArray = (arr) => {
  const numbers = [];
  const strings = [];
  let hasNumbers = false;
  let highest = 0;
  arr.forEach((item) => {
    if (typeof item === 'number') {
      hasNumbers = true;
      numbers.push(item);
      if (item > highest) {
        highest = item;
      }
    } else if (typeof item === 'string') {
      strings.push(item);
    } else {
      throw new Error('Invalid input');
    }
  });
  return {
    numbers: hasNumbers ? numbers.sort((a, b) => a - b) : [],
    strings,
    highest: hasNumbers ? highest : 'No numbers in array',
  }
};

module.exports = reassembleArray;