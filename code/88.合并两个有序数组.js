/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (m <= 0 || nums1[m - 1] <= nums2[n - 1]) {
      console.log('nums2[--n]: ', nums2[--n]);
      console.log('nums1[i]: ', nums1[i]);
      nums1[i] = nums2[--n];
    }
    else if (n <= 0 || nums1[m - 1] > nums2[n - 1]) {
      console.log('nums1[--m]: ', nums1[--m]);
      console.log('nums1[i]: ', nums1[i]);
      nums1[i] = nums1[--m]
    };
  }
};
merge([1, 2, 3], 3, [2, 5, 6], 3)
// @lc code=end

