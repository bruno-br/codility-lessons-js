// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
// https://app.codility.com/demo/results/trainingH4K82H-KJR/

function solution(A) {
  let existingNums = {};

  for (const A_element of A) {
    existingNums[A_element] = true;
  }

  for (let num = 1; num < A.length + 2; num++) {
    if (!existingNums[num]) {
      return num;
    }
  }
}
