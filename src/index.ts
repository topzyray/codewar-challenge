export function sumOfIntervals(intervals: [number, number][]) {
  if (intervals.length === 0) {
    return 0;
  }

  //   Sort intervals by their start value
  intervals.sort((a, b) => a[0] - b[0]);

  //   Initialize variables
  let sumOfInterval = 0;
  let [currentStart, currentEnd] = intervals[0];

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start > currentEnd) {
      // No overlap, add the length of the previous interval
      sumOfInterval += currentEnd - currentStart;
      currentStart = start;
      currentEnd = end;
    } else {
      // Overlapping intervals, extend the current interval if needed
      currentEnd = Math.max(currentEnd, end);
    }
  }

  //   Add the length of the last interval
  sumOfInterval += currentEnd - currentStart;

  return sumOfInterval;
}

console.log(
  sumOfIntervals([
    [1, 5],
    [6, 10],
    [11, 15],
    [16, 18],
    [20, 25],
  ])
);
