/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  
  let res = strs[0];
  for (let i = 0; i < strs.length; i++) {
    if (!strs[i].startsWith(res)) {
      res = res.substring(0, res.length - 1);
      i--;
    }
  }
  return res
};
// @lc code=end

