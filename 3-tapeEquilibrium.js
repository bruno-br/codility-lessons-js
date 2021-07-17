// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
// https://app.codility.com/demo/results/trainingFSQQTS-DSG/

function solution(A) {
  // Create arrays to sum from left to right and from right to left
  const arrSum_L_to_R = [];
  const arrSum_R_to_L = [];

  arrSum_L_to_R[0] = A[0];
  arrSum_R_to_L[A.length - 1] = A[A.length - 1];

  // Calculate the sum for each position in the arrays
  for (let i = 1; i < A.length; i++) {
    arrSum_L_to_R[i] = arrSum_L_to_R[i - 1] + A[i];
    arrSum_R_to_L[A.length - i - 1] =
      arrSum_R_to_L[A.length - i] + A[A.length - i - 1];
  }

  // Search for the minimal difference
  let minDiff = Math.abs(arrSum_L_to_R[0] - arrSum_R_to_L[1]);
  for (let i = 1; i < arrSum_L_to_R.length; i++) {
    let currDiff = Math.abs(arrSum_L_to_R[i - 1] - arrSum_R_to_L[i]);
    if (currDiff < minDiff) {
      minDiff = currDiff;
    }
  }

  return minDiff;
}
