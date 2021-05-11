

function mergeTwoSortedArrays(arr1, arr2) {
  // queue1, queue2
  // 1. get two values from each queue
  // 2. compare them and insert the smaller one into the result array.
  // 3. check the poped array empty.
  //   3-1. if it were empty, just copy all the elements inside the other array and return the result array.
  //   3-2. if it is not empty, go to 1 step

  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  let i = 0, j = 0;
  const result = []
  while (true) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++])
      if (i === arr1.length) {
        for (; j < arr2.length; j++) {
          result.push(arr2[j])
        }
        return result;
      }
    } else {
      result.push(arr2[j++])
      if (j === arr2.length) {
        for (; i < arr1.length; i++) {
          result.push(arr1[i])
        }
        return result;
      }
    }
  }
}


console.log(mergeTwoSortedArrays([1, 3, 5, 7, 9, 10, 11, 12], [2, 4, 6, 8]))
console.log(mergeTwoSortedArrays([0, 3, 4, 31], [4, 6, 30]))
console.log(mergeTwoSortedArrays([0,3,4,31], [-1,0,3,4,6,30]))
