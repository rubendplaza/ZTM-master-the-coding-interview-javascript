//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  if (!input.length) {
    return undefined;
  }
  const seenCharacters = {};
  for (let i = 0; i < input.length; i++) {
    if (!seenCharacters[input[i]]) {
      seenCharacters[input[i]] = true;
      continue;
    } else {
      return input[i];
    }
  }
  return undefined;
}

input = [2, 5, 5, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(input));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
