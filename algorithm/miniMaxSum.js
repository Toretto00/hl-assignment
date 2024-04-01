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

  var input = prompt("Enter 5 numbers separated by spaces: ");

  let arr = input.trim().split(" ").map(Number);

  if (
    arr.length === 5 &&
    arr.every((num) => Number.isInteger(num) && num > 0)
  ) {
    miniMaxSum(arr);
  } else {
    console.log(
      "Invalid input format. Please enter five positive space-separated integers."
    );
    main();
  }

  return;
}

main();
