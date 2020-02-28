/**
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

示例 1:
  输入: 123
  输出: 321

示例 2:
  输入: -123
  输出: -321

示例 3:
  输入: 120
  输出: 21
 */

var reverse = function (x) {
  const edeg = 2 ** 31
  const MIN = -edeg
  const MAX = edeg - 1
  let result
  let arr = String.prototype.split.call(x, '').reverse()
  if (arr[0] == '0') arr.shift()
  if (arr[arr.length - 1] === '-') {
    arr.pop()
    arr.unshift('-')
  }
  result = arr.join('')
  return (result > MAX || result < MIN) ? 0 : result
};

reverse(123)
reverse(-123)
reverse(~123)
reverse(120)