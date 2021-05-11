

function twosum(nums, target) {
  const hashtable = {}

  // 1. traverse all the items
  // 2. calculate the difference between target and the fetched value
  // 3. find the key that is the same value with the difference in the hashtable
  // 3-1.  if it found, return the index of the iteam and the value of the hashtable wich is from the matched key
  // 3-2.  if it didn't exist, then put the difference as key and use index as value. [value, index]
  // 4. go to step number 1

  for (let i=0; i<nums.length; i++) {
    const difference = target-nums[i]
    // console.log(difference)
    // console.log(hashtable)
    if (hashtable[difference] !== undefined) {
      return [hashtable[difference], i]
    } else {
      hashtable[nums[i]] = i
    }
  }
}


console.log(twosum([2,7,11,15], 9))
console.log(twosum([3,2,4], 6))
console.log(twosum([3,3], 6))