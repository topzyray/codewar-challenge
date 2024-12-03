// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  // Get total of classPoints
  let totalClassPoints = classPoints.reduce((acc, curr) => acc + curr, 0);

  // Get total number of class students
  let totalStudentsExceptMe = classPoints.length;

  // Average score on class points
  let averageScore = totalClassPoints / totalStudentsExceptMe;

  if (yourPoints > averageScore) return true;

  return false;
}
