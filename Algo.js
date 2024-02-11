/* fibo */

function fibo(n) {
  const fib = [0, 1];

  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibo(5));

/* fact */

function fact(n) {
  let facto = 1;

  for (i = 2; i <= n; i++) {
    facto = facto * i;
  }
  return facto;
}

console.log(fact(5));

/* prime */

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(1));

console.log(isPrime(5));
console.log(isPrime(4));

/* power of 2 */

function power(n) {
  //return(Math.log2(n))
  if (Math.floor(Math.log2(n)) === Math.log2(n)) {
    return true;
  } else return false;
}

function power2(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

function powerbitwise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

/* recursion fibo */

function rec_fibo(n) {
  if (n < 2) {
    return n;
  }
  return rec_fibo(n - 1) + rec_fibo(n - 2);
}

console.log(rec_fibo(0));
console.log(rec_fibo(1));
console.log(rec_fibo(6));
console.log(rec_fibo(7));

/* recur fact */

function recur_fact(n) {
  if (n === 0) {
    return 1;
  }
  return n * recur_fact(n - 1);
}
console.log(recur_fact(0));
console.log(recur_fact(1));
console.log(recur_fact(2));
console.log(recur_fact(3));
console.log(recur_fact(4));
console.log(recur_fact(5));
console.log(recur_fact(6));
console.log(recur_fact(7));

/* Liner Search */

function find(n, t) {
  for (i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(find([-5, 2, 10, 4, 6], 10));
console.log(find([-5, 2, 10, 4, 6], 6));
console.log(find([-5, 2, 10, 4, 6], 20));

/* binary search */

function find(n, t) {
  let leftIndex = 0;
  let rightIndex = n.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (n[middleIndex] === t) {
      return middleIndex;
    }
    if (n[middleIndex] < t) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}

console.log(find([-5, 2, 4, 6, 10], 10));
console.log(find([-5, 2, 4, 6, 10], 6));
console.log(find([-5, 2, 4, 6, 10], 20));

/* recur binary search */

function recur_binary(arr, tar) {
  return search(arr, tar, 0, arr.length - 1);
}

function search(arr, tar, leftIndex, rightIndex) {
  middleIndex = Math.ceil((leftIndex + rightIndex) / 2);

  if (leftIndex > rightIndex) {
    return -1;
  }

  if (tar == arr[middleIndex]) {
    return middleIndex;
  }
  if (tar < arr[middleIndex]) {
    return search(arr, tar, leftIndex, middleIndex - 1);
  } else {
    return search(arr, tar, middleIndex + 1, rightIndex);
  }
}

console.log(recur_binary([-5, 2, 4, 6, 10], 10));
console.log(recur_binary([-5, 2, 4, 6, 10], 6));
console.log(recur_binary([-5, 2, 4, 6, 10], 20));

/*bubble sort */

function bublesort(arr) {
  let swapped;
  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bublesort([8, 20, -2, 4, -6]));

 /* insertion sort */
function iso(arr) {
  for (i = 1; i < arr.length; i++) {
    nti = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = nti;
  }
  return arr;
}

console.log(iso([8, 20, -2, 4, -6]));

/* quick sort*/
function qsort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  pivot = arr[arr.length - 1];
  left = [];
  right = [];

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...qsort(left), pivot, ...qsort(right)];
}

console.log(qsort([8, 20, -2, 4, -6]));
