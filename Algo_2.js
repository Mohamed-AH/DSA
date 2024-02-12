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

/* cartesian product */

function cart(arr1, arr2) {
  sorted = [];

  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      sorted.push([arr1[i], arr2[j]]);
    }
  }
  return sorted;
}

console.log(cart([1, 2], [3, 4, 5]));

/* climbing stair */

function climbStair(n) {
  let noOfWays = [1, 2];

  for (i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}

console.log(climbStair(4));

/* tower of hanoi */

function toh(n, fr, tr, ur) {
  if (n === 1) {
    console.log("Move disk 1 from " + fr + " to " + tr);
    return;
  }
  toh(n - 1, fr, ur, tr);
  console.log("move disk " + n + " from " + fr + " to " + tr);
  toh(n - 1, ur, tr, fr);
}

toh(3, "A", "C", "B");

