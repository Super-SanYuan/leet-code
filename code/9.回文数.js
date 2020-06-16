/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   // 转数组 然后反转 然后拼接 然后判断是否相等
//   return [...(x + '')].reverse().join('') == x
// };
var isPalindrome = function (x) {
  // 转字符串 遍历一半 判断收尾是否相等
  let str = x + ''
  for (let i = 0; i < str.length / 2; i++) {
    console.log('str.length - i - 1', str.length - i - 1)
    if (str[i] != str[str.length - i - 1]) {
      return false
    }
  }
  return true
};
// var isPalindrome = function (x) {
     // 反转数字
//   let t = x
//   let r = 0 // r 是 x 的反转
//   while (t) {
//     const rmd = t % 10
//     r = r * 10 + rmd
//     t = (t - rmd) / 10
//   }
//   return r === x
// };
// @lc code=end

