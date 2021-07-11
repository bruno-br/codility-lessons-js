// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
// https://app.codility.com/demo/results/trainingE6CD8K-2SJ/

function solution(A, K) {
  if (A.length > 0) {
    for (let i = 0; i < K; i++) {
      let element = A.pop();
      A.unshift(element);
    }
  }
  return A;
}
