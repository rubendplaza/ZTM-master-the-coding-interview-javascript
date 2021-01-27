const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(index1, index2) {
  const temp = numbers[index1];
  numbers[index1] = numbers[index2];
  numbers[index2] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] >= arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
