const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Array:", arr);
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        console.log("Inserting:", arr[i]);
        const temp = arr.splice(i, 1);
        console.log("Spliced Array:", arr);
        arr.splice(j, 0, temp[0]);
        console.log("Inserted.", arr);
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
