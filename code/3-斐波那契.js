/**
 * 斐波那契数列
 * 第三个数等于前两个数之和
 */

function fib(max) {
  let n = 0, a = 0, b = 1, arr = [0, 1];

  while (n < max) {
    [a, b] = [b, a + b]
    arr.push(b)
    n++
  }

  return arr
}

// console.log(fib(5))


// generator
function* fibo(max) {
  let n = 0, a = 0, b = 1;
  while (n < max) {
    [a, b] = [b, a + b]
    yield b
    n++
  }
}
for (const f of fib(5)) {
  console.log(f)
}
