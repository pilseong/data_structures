


function factorialRecursive(num) {
  if (num === 1) return 1;

  return num * factorialRecursive(num-1);
}

function factorialIteration(num) {
  let result = 1;
  for (let i=num; i>1; i--) {
    result = result * i;
  }
  return result;
}

console.log(factorialRecursive(10))
console.log(factorialIteration(10))