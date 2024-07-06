## Explanation:

1. Sort the Intervals: The intervals are sorted based on their start values using sort.
2. Initialize Variables: totalLength is initialized to 0, and currentStart and currentEnd are set to the start and end of the first interval.
3. Iterate Through Intervals: For each subsequent interval:

   - If the current interval starts after the end of the previous interval (start > currentEnd), it means there is no overlap. The length of the previous interval is added to totalLength, and currentStart and currentEnd are updated to the current interval.
   - If there is an overlap (start <= currentEnd), currentEnd is updated to the maximum of currentEnd and the end of the current interval.

4. Add Last Interval: The length of the last interval is added to totalLength.
