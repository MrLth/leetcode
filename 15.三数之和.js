/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // SORT
  const len = nums.length
  if (len < 3) return []
  const rst = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 2; i++) {
    // i > 0，避免和 nums[-1] 比较
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1, k = len - 1; j < k;) {
      // j > i + 1 ，避免 nums[i] 和 nums[j] 进行比较
      if (j > i + 1 && nums[j] === nums[j - 1]) { j++; continue }

      const val = nums[i] + nums[j] + nums[k]
      if (val < 0) {
        j++
      } else if (val > 0) {
        k--
      } else {
        rst.push([nums[i], nums[j], nums[k]])
        j++
        k--
      }
    }
  }

  return rst
};
// @lc code=end

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
