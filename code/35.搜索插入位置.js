/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let len = nums.length, res = 0, i = 0;
  if (len === 0) return res
  if (len === 1 && nums[0] === target) return res
  res = nums.indexOf(target)
  if (res === -1) {
    
    for (; i < len; i++) {
      if (nums[i] > target) {
        console.log(i, 'i')
        res = i
        break
      }
    }
    if (nums[len - 1] < target) {
      res = len
    }
  }
  return res
};
searchInsert([1, 3, 5, 6], 2)
// @lc code=end

