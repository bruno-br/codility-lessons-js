// https://codility.com/programmers/task/binary_gap/
// https://app.codility.com/demo/results/trainingXG2GVY-NGE/

function solution(N) {
  let binaryN = N.toString(2);

  let longestBinaryGap = 0;
  let currBinaryGap = -1;

  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] == 0) {
      if (currBinaryGap >= 0) {
        currBinaryGap++;
      }
    } else {
      if (currBinaryGap > 0 && currBinaryGap > longestBinaryGap) {
        longestBinaryGap = currBinaryGap;
      }
      currBinaryGap = 0;
    }
  }

  return longestBinaryGap;
}
