// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

export const digitize = (n: number): number[] => {
  let stringArr = n.toString().split("").reverse();
  let numArr = stringArr.map((num) => Number(num));

  return numArr;
};
