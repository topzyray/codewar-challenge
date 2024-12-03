// KYU: 6

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

interface Count {
  [key: string]: number;
}

export function duplicateCount(text: string): number {
  // Converting text to array
  let arr = text.toLowerCase().split("");

  // Tracking count for each items
  let count: Count = {};

  // Populating the count with number of occurence of each letters
  arr.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });

  // Initialize a characters count variable to track character occurences
  let charactersCount = 0;

  // Mapping through count object
  for (const key in count) {
    if (count.hasOwnProperty(key)) {
      if (count[key] > 1) {
        charactersCount++;
      }
    }
  }

  // Returning the characters count
  return charactersCount;
}
