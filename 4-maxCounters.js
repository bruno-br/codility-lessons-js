// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
// https://app.codility.com/demo/results/trainingJPU7F3-AWD/

function solution(N, A) {
  let counters = new Array(N).fill(0);
  let maxCounterValue = 0;
  let lastOpMaxValue = 0;

  for (let K = 0; K < A.length; K++) {
    if (A[K] >= 1 && A[K] <= N) {
      const X = A[K] - 1;

      counters[X] =
        counters[X] < lastOpMaxValue ? lastOpMaxValue + 1 : counters[X] + 1;

      if (counters[X] > maxCounterValue) {
        maxCounterValue = counters[X];
      }
    } else if (A[K] == N + 1) {
      lastOpMaxValue = maxCounterValue;
    }
  }

  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < lastOpMaxValue) {
      counters[i] = lastOpMaxValue;
    }
  }

  return counters;
}
