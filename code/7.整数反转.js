/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let arr = String.prototype.split.call(x, '').reverse(),
    len = arr.length,
    res = '',
    edeg = 2 ** 31,
    MIN = -edeg,
    MAX = edeg - 1;

  if (isNaN(arr[len - 1])) {
    res += arr[len - 1]
    arr.pop()
  } else if (arr[len - 1] === 0) {
    arr.pop()
  }
  res += arr.join('')
  return (res > MAX || res < MIN) ? 0 : Number(res)
};

// @lc code=end

