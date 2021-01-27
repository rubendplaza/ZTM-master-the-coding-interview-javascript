function swap(arr, pos1, pos2) {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}

function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not valid string.";
  }

  //convert to array
  const arr = str.split("");
  //index counters
  let start = 0;
  let end = arr.length - 1;
  //swap values at counters then incremement start counter, decrement end counter
  //and continue the process until the counters meet at the middle of the array
  while (start !== end || start !== end + 1) {
    swap(arr, start, end);
    ++start;
    --end;
  }
  return arr.join("");
}

myString = "name";
//Works for odd number of characters.
console.log(reverse(myString));

//ANDREI's CODE
// function reverse(str){
//     if(!str || typeof str != 'string' || str.length < 2 ) return str;

//     const backwards = [];
//     const totalItems = str.length - 1;
//     for(let i = totalItems; i >= 0; i--){
//       backwards.push(str[i]);
//     }
//     return backwards.join('');
//   }

//   function reverse2(str){
//     //check for valid input
//     return str.split('').reverse().join('');
//   }

//   const reverse3 = str => [...str].reverse().join('');

//   reverse('Timbits Hi')
//   reverse('Timbits Hi')
//   reverse3('Timbits Hi')
