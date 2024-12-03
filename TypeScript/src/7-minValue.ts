// KYU: 7

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

export const minValue = (values: number[]): number => {
  // Remove duplicates from array
  let nonDuplicateValues = Array.from(new Set(values));

  //   Sort the array in ascending order
  let sortedValues = nonDuplicateValues.sort((a, b) => a - b);

  // Convert all items to string and concatenate them using the reducer function
  let newValue = sortedValues.map(String).reduce((acc, curr) => acc + curr);

  // Converts the result from string to number and return
  return +newValue;
};
