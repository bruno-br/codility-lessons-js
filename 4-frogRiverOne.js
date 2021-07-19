// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
// https://app.codility.com/demo/results/trainingPUXCGA-J3M/

function solution(X, A) {
  const positionsLeft = {};
  let numberOfPosLeft = X;
  for (let i = 1; i <= X; i++) {
    positionsLeft[i] = true;
  }

  for (let i = 0; i < A.length; i++) {
    const currPos = A[i];
    if (positionsLeft[currPos]) {
      delete positionsLeft[currPos];
      numberOfPosLeft--;
      if (numberOfPosLeft === 0) {
        return i;
      }
    }
  }
  return -1;
}
