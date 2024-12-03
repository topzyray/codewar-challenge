// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

let arr1 = [3, 1, 0, 2, 5];
// let arr1 = [0,1,2,3,5]
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function nextId(ids: number[]): number[] {
  //this will be awesome!

  return ids.sort();
}

console.log(nextId(arr1));
