
// one pass makes one sorted item. one largest or one smallest
// if we use flag to check there is swap in a pass, 
// this sort works as adaptive sorting algorithm
function bubble_sort(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(i, j)
      }
    }
    if (flag === false) {
      return arr;
    }
  }
  return arr
}

let array = [9, 3, 4, 6, 8, 2, 1, 7, 12];
console.log(bubble_sort(array));

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(bubble_sort(array));