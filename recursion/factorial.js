// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(n) {
  if (n === 1) {
    return 1;
  }
  return n * findFactorialRecursive(n - 1);
}

function findFactorialIterative(n) {
  answer = 1;
  for (let i = n; i > 1; i--) {
    answer *= i;
  }
  return answer;
}

ans = findFactorialRecursive(4);
console.log(ans);
ans = findFactorialIterative(4);
console.log(ans);
