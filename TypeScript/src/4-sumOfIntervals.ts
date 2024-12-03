// KYU: 4

// Sort the Intervals: The intervals are sorted based on their start values using sort.
// Initialize Variables: totalLength is initialized to 0, and currentStart and currentEnd are set to the start and end of the first interval.
// Iterate Through Intervals: For each subsequent interval:

// If the current interval starts after the end of the previous interval (start > currentEnd), it means there is no overlap. The length of the previous interval is added to totalLength, and currentStart and currentEnd are updated to the current interval.
// If there is an overlap (start <= currentEnd), currentEnd is updated to the maximum of currentEnd and the end of the current interval.

// Add Last Interval: The length of the last interval is added to totalLength.

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

console.log(sumOfIntervals([[1, 5]]));

console.log(
  sumOfIntervals([
    [1, 5],
    [7, 11],
  ])
);
