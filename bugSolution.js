function foo(a, b) {
  return a + b; //Buggy Code
}

console.log(foo(1, '2')); // Output: "12"

function bar(a, b) {
  // Solution: Explicit type conversion using parseInt
  return parseInt(a) + parseInt(b);
}

console.log(bar(1, '2')); // Output: 3

//Alternative solution using Number()
function baz(a, b) {
  return Number(a) + Number(b);
}
console.log(baz(1, '2')); // Output: 3