/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 1) return 1
  let i = 0;
  let y = 0
  while (y <= x) {
    i++
    y = i * i
  }
  return i - 1
};
// @lc code=end

