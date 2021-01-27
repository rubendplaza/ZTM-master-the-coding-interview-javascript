const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("Unsorted:", numbers);

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  //Split array into two halves recursively then merge subarrays once fully split
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let sorted = [];
  while (left[leftIndex] || right[rightIndex]) {
    // When all the left side has been sorted just keep pushing from the right side
    if (!left[leftIndex]) {
      sorted.push(right[rightIndex]);
      rightIndex++;
      continue;
    }
    // When all the right side has been sorted just keep pushing from the left side
    if (!right[rightIndex]) {
      sorted.push(left[leftIndex]);
      leftIndex++;
      continue;
    }
    // Decide from which side to push to sorted array and increment go to next element by increasing index, continue looping
    if (left[leftIndex] < right[rightIndex]) {
      sorted.push(left[leftIndex]);
      leftIndex++;
      continue;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
      continue;
    }
  }
  return sorted;
}

const answer = mergeSort(numbers);
console.log("Sorted:", answer);
