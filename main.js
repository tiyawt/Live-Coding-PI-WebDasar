function reverseAndTimes(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result[result.length] = arr[i] * 2;
  }
  return result;
}

console.log(reverseAndTimes([1, 4, 6, 7]));
console.log(reverseAndTimes([7, 4, 2, 1]));
console.log(reverseAndTimes([5]));
