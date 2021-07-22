// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// https://app.codility.com/demo/results/trainingVXZNNB-UPB/

function solution(A) {
  const nums = [];
  let maxValue = 0;

  for (num of A) {
    if (num > 0) {
      nums[num] = true;
      if (num > maxValue) {
        maxValue = num;
      }
    }
  }

  if (maxValue === 0) {
    return 1;
  }

  for (let i = 1; i <= maxValue; i++) {
    if (!nums[i]) return i;
  }

  return maxValue + 1;
}
