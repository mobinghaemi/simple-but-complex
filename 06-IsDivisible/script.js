const isDivisible = (a, b, c) => !(a % b > 0) && !(a % c > 0)

console.log(isDivisible(12, 3, 4));