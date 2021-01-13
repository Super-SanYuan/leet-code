/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.split(' ')
  let len = arr.length, i = 0, res = 0;
  for (; i < len; i++) {
    if (arr[i]) {
      res = arr[i].length
    }
  }
  return res
};
// @lc code=end

