/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
let obj = {
  '(': ')',
  '{': '}',
  '[': ']'
}
var isValid = function (s) {
  let len = s.length, i = 0, j = [];
  if (len === 0 || len % 2 !== 0) return false // 空字符串和奇数直接pass

  for (; i < len; i++) {
    let k = s[i]
    if (obj[k]) {
      j.push(k)
    } else {
      switch (k) {
        case '}':
          if (j.pop() !== '{') return false
          break;
        case ')':
          if (j.pop() !== '(') return false
          break;
        case ']':
          if (j.pop() !== '[') return false
          break;
      }
    }
  }

  return !j.length
};

// @lc code=end

