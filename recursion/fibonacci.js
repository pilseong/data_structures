

function fibonacciRecusive(num) {
  if (num === 0) return 0;
  else if (num <= 2) return 1;

  return fibonacciRecusive(num-2) + fibonacciRecusive(num-1);
}

function fibonacciIterative(num) {
  if (num === 0) return 0;
  else if (num <= 2) return 1;

  let pre = 1;
  let prepre = 1;
  for (let i=3; i<=num; i++) {
    if (i === num) return pre + prepre;
    else {
      const temp = prepre;
      prepre = pre;
      pre = pre + temp;
    }
  }
}

// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(7));
// console.log(fibonacci(8));
// console.log(fibonacci(9));
// console.log(fibonacci(10));
// console.log(fibonacci(11));
// console.log(fibonacci(12));
// console.log(fibonacci(13));
// console.log(fibonacci(14));
// console.log(fibonacci(15));
// console.log(fibonacci(16));
// console.log(fibonacci(17));
// console.log(fibonacci(18));
// console.log(fibonacci(19));
console.log(fibonacciIterative(100));
// console.log(fibonacciRecusive(45));
