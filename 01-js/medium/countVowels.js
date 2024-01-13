/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) { {
  // Convert the string to lowercase for case-insensitivity
  const lowercasedStr = str.toLowerCase();

  // Count the number of vowels in the string
  const vowelCount = lowercasedStr.split('').filter(char => 'aeiou'.includes(char)).length;

  return vowelCount;
}
}

module.exports = countVowels;