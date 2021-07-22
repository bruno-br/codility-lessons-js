// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
// https://app.codility.com/demo/results/trainingFJNCUS-WMP/

function solution(A) {
  const elements = [];

  for (const num of A) {
    if (elements[num]) {
      return 0;
    } else {
      if (num > A.length) {
        return 0;
      }
      elements[num] = true;
    }
  }

  return 1;
}
