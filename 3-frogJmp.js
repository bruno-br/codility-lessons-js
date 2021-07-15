// https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
// https://app.codility.com/demo/results/trainingVGRUN3-PMB/

function solution(X, Y, D) {
  let distance = Y - X;
  let jumps = Math.ceil(distance / D);
  return jumps;
}
