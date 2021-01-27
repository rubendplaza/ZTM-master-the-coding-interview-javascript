const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(index1, index2) {
  const temp = numbers[index1];
  numbers[index1] = numbers[index2];
  numbers[index2] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(min, i);
  }
}

selectionSort(numbers);
console.log(numbers);
