// Given 2 arrays, create a function that let's
// a user know (t/f) whether these two arrays contain
// any common items
// For example:
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
// should return false
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

//Brute Force
// function containsCommonItem(arr1, arr2){
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] === arr[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

//O(a*b)

// Second approach
// array1 ==> obj {
// a: true
// b: true
// c: true
// x: true
//}
//array2[index] === obj.properties

//Steps:
// function containsCommenItem2(arr1, arr2) {
  //loop through first array and create object where properties === items in the array
//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
    // if (!map[arr1[i]]) {
    //   const item = arr1[i];
    //   map[item] = true;
    // }
//   }
  //loop through second array and check if item in second array exists on created object.
//   for (let j = 0; j < arr2.length; j++) {
    // if (map[arr2[j]]) {
    //   return true;
    // }
//   }
//   return false;
  //O(a+b)
// }

// console.log(containsCommenItem2(array1, array2));

// More Readable, Language Specific
function containsCommonItem3(arr1, arr2){
    return arr1.some(item => arr2.includes(item));
}