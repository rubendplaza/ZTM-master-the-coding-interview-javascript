const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const num = 9;

function numOfPairs(n, ar) {
  let sockCount = {};
  for (let i = 0; i < ar.length; i++) {
    if (!sockCount[ar[i]]) {
      const item = ar[i];
      sockCount[item] = 1;
    } else if (sockCount[ar[i]]) {
      sockCount[ar[i]] += 1;
    }
  }
  let pairs = 0;
  for (const sock in sockCount) {
    pairs += Math.floor(sockCount[sock] / 2);
  }
  return pairs;
}

console.log(numOfPairs(num, arr));
