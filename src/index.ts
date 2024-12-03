interface Count {
  [key: string]: number;
}

export function duplicateCount(text: string): number {
  // Converting text to array
  let arr = text.split("");

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

console.log(duplicateCount("abcded11"));
