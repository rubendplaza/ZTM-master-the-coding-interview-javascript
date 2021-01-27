const strings = ["a", "b", "c", "d"];
//4 letters *4 bytes per letter = 16 bytes of memory

//go to strings and grab the third item
console.log(strings[2]);

//push O(1)
strings.push('e');
console.log(strings);

//pop O(1)
strings.pop(); //removes the last element of the array
console.log(strings);

//unshift - add to the beginning of the array
// O(n)
strings.unshift('x');
console.log(strings);

//splice - O(n)
//(start, deleteCount, items)
strings.splice(2, 0, 'alien');


