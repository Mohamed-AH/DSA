/* merge sort */

function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftarr = arr.slice(0, mid);
  const rightarr = arr.slice(mid);
  return merge(mergesort(leftarr), mergesort(rightarr));
}

function merge(leftarr, rightarr) {
  sorted = [];
  while (leftarr.length && rightarr.length) {
    if (leftarr[0] <= rightarr[0]) {
      sorted.push(leftarr.shift());
    } else {
      sorted.push(rightarr.shift());
    }
  }
  return [...sorted, ...leftarr, ...rightarr];
}

console.log(mergesort([8, 20, -2, 4, -6]));
