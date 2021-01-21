/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n
  let n1 = 1, n2 = 2, res;
  for (let i = 3; i <= n; i++) {
    res = n1 + n2
    n1 = n2
    n2 = res
  }
  return n2
};
// @lc code=end

