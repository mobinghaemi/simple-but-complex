let number = +prompt("Please Enter a Number");

("Method One :");
// for (let i = 9; i >= 1; i--) {
//     number *= i
// }
// console.log(number)

("Method Two : Recommended");
// let loop = number;
// function recurse(i) {
//   console.log((number = number * i));
//   if (i < loop) {
//     recurse(i + 1);
//   }
// }
// recurse(1);

("Method Three");
function recurse(input) {
  if (input > 1) return input * recurse(input - 1);
  return 1;
}

console.log(recurse(number));
