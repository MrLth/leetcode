/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-22 14:35:00
 * @LastEditTime: 2021-01-22 15:14:45
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //#region solution 1
  // for (let i = nums.length - 1; i > 0; i--) {
  //   const t = target - nums[i]
  //   for (let j = i - 1; j > -1; j--) {
  //     if (nums[j] === t) return [i, j]
  //   }
  // }
  //#endregion

  //#region solution 2
  /** *
  for (let i = 0, len = nums.length - 1; i < len; i++) {
    const idx = nums.indexOf(target - nums[i], i + 1)
    if (idx !== -1) return [idx, i]
  }
  /** */
  //#endregion

  //#region solution 3
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const t = target - num
    if (map.has(t)) {
      return [i, map.get(t)]
    } else {
      map.set(num, i)
    }
  }
  //#endregion

};
// @lc code=end

console.log(twoSum([3, 3], 6))