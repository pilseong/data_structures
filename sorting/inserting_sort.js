// [3,1,2,4,6,8,7]
// insertion sort regards the first element is already sorted
// one loop means one item has been sorted
function insertion_sort(arr) {

  let j = 0; let count = 0;
  for (let i=1; i<arr.length; i++) {
    let temp = arr[i];
    j = i-1;
    while (j > -1) {
      count++;
      if (temp < arr[j]) {
        arr[j+1] = arr[j--]
      } else {
        arr[j+1] = temp;
        break;
      }
    }
    if (j === -1) {
      arr[j+1] = temp;
    }
    // console.log("out",arr)
  }
  console.log(count)
  return arr;
}


let array = [9, 3, 4, 6, 8, 2, 1, 7, 12];
console.log(insertion_sort(array));

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(insertion_sort(array));

array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(insertion_sort(array));