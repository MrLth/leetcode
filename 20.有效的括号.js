/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-21 08:30:49
 * @LastEditTime: 2021-01-21 08:55:44
 * @Description: file content
 */
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
var isValid = function (s) {
  if (s === '') return true

  const stack = []
  const dict = Object.create(null)
  const startList = ['(', '[', '{']
  dict[')'] = '('
  dict[']'] = '['
  dict['}'] = '{'

  for (const c of s) {

    const top = stack[stack.length - 1]

    if (startList.includes(c))
      stack.push(c)
    else {
      if (dict[c] !== top)
        return false
      stack.pop()
    }

  }

  return !stack.length
};
// @lc code=end

