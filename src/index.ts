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

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
