
//your JS code here. If required.
function findSecondLargest(a, n) {
  /*
  First, sort the array and find the first_largest element present in the array (at the last position).
  */
  a.sort();

  /*
  Now for the second_largest element, we need to start from second last element as the largest element is at last.
  */
  let second_largest = 0;
  /*
  If the last and second last element are equal then check the previous one else return the second last element.
  */
  for (let i = n - 2; i >= 0; i--) {
    if (a[i] != a[n - 1]) {
      second_largest = a[i];
      break;
    }
  }

  return second_largest;
}

const a = [12, 35, 1, 10, 34, 1];
let n = a.length;
let answer = findSecondLargest(a, n);
console.log("The second largest element in the array is: " + answer);