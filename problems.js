function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  let newArr = [];
  for (i = 1; i < arr.length; i = i + 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  let newArr = [];
  for (i = arr.length - 1 - (arr.length % 2); i > 0; i = i - 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    arr[Math.pow(2, i)] ? newArr.push(arr[Math.pow(2, i)]) : null;
  }
  return newArr;
}
// console.log(secondPower([1, 7]));
// throw new Error("my error message");

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    arr[Math.pow(n, i)] ? newArr.push(arr[Math.pow(n, i)]) : null;
  }
  return newArr;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  let newArr = [];
  for (i = 0; i < Math.ceil(arr.length / 2); i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  let newArr = [];
  for (i = arr.length - 1; i >= Math.ceil(arr.length / 2); i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
