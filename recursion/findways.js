const readlineSync = require('readline-sync');
let global = 0;

function findways(cur, target) {
  global++;
  if (cur === target) {
    return 1;
  }
  if (cur > target) return 0;

  return findways(cur+1, target) + findways(cur+2, target) + findways(cur+3, target);
}


let steps = readlineSync.question("How many steps: ");
const answer = findways(0, +steps);
console.log(answer);
console.log(global)