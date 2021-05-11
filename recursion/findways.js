const readlineSync = require('readline-sync');


function findways(cur, target) {
  
  if (cur === target) {
    console.log(cur, target);
    return 1;
  }
  if (cur > target) return 0;

  return findways(cur+1, target) + findways(cur+2, target) + findways(cur+3, target);
}


let steps = readlineSync.question("How many steps: ");
const answer = findways(0, +steps);
console.log(answer);