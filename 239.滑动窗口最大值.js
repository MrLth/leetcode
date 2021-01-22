/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-21 15:58:10
 * @LastEditTime: 2021-01-22 11:22:35
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0 || k === 0) {
    return []
  }

  const queue = [], rst = [], len = nums.length;

  for (let l = 1 - k, r = 0; r < len; l++, r++) {
    const val = nums[r]

    while (queue.length && queue[queue.length - 1][0] <= val) {
      queue.pop()
    }

    queue.push([val, r])

    if (queue[0][1] < l) {
      queue.shift()
    }

    if (l >= 0) {
      rst.push(queue[0][0])
    }

  }

  return rst
};

// @lc code=end

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))