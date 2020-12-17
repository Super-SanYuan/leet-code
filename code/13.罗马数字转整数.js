/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

let obj = {
  I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
}
var romanToInt = function (s) {
  let arr = s.split('').map(i => obj[i]), res = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] < arr[i + 1]) {
      res += arr[i + 1] - arr[i]
      i++
    } else {
      res += arr[i]
    }
  }
  return res
};

romanToInt("MCMXCIV")
// @lc code=end

