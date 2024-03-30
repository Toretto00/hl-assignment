function miniMaxSum(arr) {
  var sum = 0;
  var min = parseInt(arr[0]);
  var max = parseInt(arr[0]);

  for (let i of arr) {
    sum += parseInt(i);
    if (parseInt(i) < min) {
      min = parseInt(i);
    }
    if (parseInt(i) > max) {
      max = parseInt(i);
    }
  }
  console.log(sum - max, sum - min);
  return;
}

function main() {
  const prompt = require("prompt-sync")({ sigint: true });
  var input = prompt("Input 5 numbers: ");
  let arr = input.trim().split(" ");
  miniMaxSum(arr);
  return;
}

main();
