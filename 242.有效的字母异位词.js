/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-22 14:12:55
 * @LastEditTime: 2021-01-22 14:30:06
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const map = new Map()

  for (const c of s) {
    const t = map.get(c)
    if (!t)
      map.set(c, 1)
    else {
      map.set(c, t + 1)
    }
  }

  for (const c of t) {
    const t = map.get(c)
    if (!t) {
      return false
    }

    if (t === 1) {
      map.delete(c)
    } else {
      map.set(c, t - 1)
    }
  }

  return map.size === 0
};
// @lc code=end
