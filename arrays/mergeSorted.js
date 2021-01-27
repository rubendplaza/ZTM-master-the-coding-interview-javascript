const arr1 = [5, 9, 11, 16, 19, 25, 28, 30, 31, 39];
const arr2 = [6, 13, 15, 16, 20, 31, 44, 48, 49, 50];

//good to mention which parts of your code
//aren't that readable and this is what you
//would do to clean it up
//just explaining it is really good
//might want to split some stuff up into functions etc.

function mergeSortedArrays(arr1, arr2) {
  const sorted = [];
  let ctr1 = 0;
  let ctr2 = 0;
  const size1 = arr1.length;
  const size2 = arr2.length;

  while (ctr1 !== size1 || ctr2 !== size2) {
    if (ctr1 === size1) {
      for (let i = ctr2; i < size2; i++) {
        sorted.push(arr2[i]);
        ctr2++;
      }
    }
    if (ctr2 === size2) {
      for (let i = ctr1; i < size1; i++) {
        sorted.push(arr1[i]);
        ctr1++;
      }
    } else {
      if (arr1[ctr1] < arr2[ctr2]) {
        sorted.push(arr1[ctr1]);
        ctr1++;
      } else {
        sorted.push(arr2[ctr2]);
        ctr2++;
      }
    }
  }
  return sorted;
}

console.log(mergeSortedArrays(arr1, arr2));

//Andrei's Code

// function mergeSortedArrays(array1, array2) {
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;

//   //Check input (array? have two parameters)
//   if (array1.length === 0) {
//     return array2;
//   }

//   if (array2.length === 0) {
//     return array1;
//   }

//   if (!array2) {
//     return [];
//   }

//   if (!array1) {
//     return [];
//   }

//   while (array1Item || array2Item) {
//     if (!array2Item || array1Item < array2Item) {
//       mergedArray.push(array1Item);
//       array1Item = array1[i];
//       i++;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = array2[j];
//       j++;
//     }
//   }

//   return mergedArray;
// }
