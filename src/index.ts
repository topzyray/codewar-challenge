export function nextId(ids: number[]): number {
  // Remove duplicates from the array using the Set constructor
  ids = [...new Set(ids)];

  // Sorting the new array in ascending order
  ids = ids.sort((a, b) => a - b);

  // Iterating through the array
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] != i) {
      return i;
    }
  }
  return ids.length;
}
