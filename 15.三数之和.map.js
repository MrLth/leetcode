/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-22 15:23:49
 * @LastEditTime: 2021-01-22 16:21:22
 * @Description: file content
 */
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
  const len = nums.length
  const map = new Map()
  const rst = []
  const test = []

  for (let i = 0; i < len; i++) {
    const num = nums[i]
    const t = map.get(num)
    if (t) {
      // t.push(i)
    } else {
      map.set(num, i)
      // map.set(num, [i])
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const t = - nums[i] - nums[j]

      const list = map.get(t)

      if (list) {
        // console.log(list)
        // for (const c of list) {
        // if ([i, j].includes(c)) continue
        //   rst.push([i, j, c])
        // }
        if (![i, j].includes(list))
          unique(rst, [i, j, list].map(v => nums[v]))
      }
      // if (c && ![i, j].includes(c)) {
      // rst.push([c, i, j])
      // }
    }
  }

  return rst
};

function unique(list, item) {
  item.sort((a, b) => a - b)
  let isRepeated = false
  for (const it of list) {
    if (it[0] === item[0] && it[1] === item[1] && it[2] === item[2]) {
      isRepeated = true
      break
    }
  }

  if (!isRepeated) list.push(item)


}
// @lc code=end

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))