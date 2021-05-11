
function reverseString(str) {
  if (str.length <= 1) return str;

  const pos = Math.floor(str.length / 2)

  if (str.length % 2 === 0) {
    return _reverse(str, pos-1, pos)
  } else {
    return _reverse(str, pos - 1, pos + 1)
  }
}

function _reverse(str, a, b) {
  // console.log(str, a, b)
  if (b === str.length) return str;

  const sw1 = str.charAt(a);
  const sw2 = str.charAt(b);

  const arr = str.split("");
  arr[b] = sw1;
  arr[a] = sw2;

  str = arr.join('')

  return _reverse(str, a-1, b+1);
}

function reverse(str) {
  if (str === '') return '';

  return reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverseString('yoyo mastery'))
console.log(reverse('yoyo mastery'))