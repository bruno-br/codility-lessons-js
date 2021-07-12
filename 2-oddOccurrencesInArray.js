// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
// https://app.codility.com/demo/results/trainingVWUD6W-95Q/

function solution(A) {
  let appearances = {};
  for (const num of A) {
    if (appearances[num] >= 1) {
      appearances[num]++;
    } else {
      appearances[num] = 1;
    }
  }
  let keys = Object.keys(appearances);
  for (const key of keys) {
    if (appearances[key] % 2 != 0) {
      return parseInt(key);
    }
  }
  return -1;
}
