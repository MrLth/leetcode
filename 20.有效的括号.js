/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-21 08:30:49
 * @LastEditTime: 2021-01-21 09:32:18
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
  //#region solution 1
  /**
  if (s === '') return true

  const stack = []
  const dict = Object.create(null)
  const startList = ['(', '[', '{']
  dict[')'] = '('
  dict[']'] = '['
  dict['}'] = '{'

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
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
  /**/
  //#endregion

  //#region solution 2
  /** *
  if (s === '') return true

  const stack = []

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    const top = stack[stack.length - 1]

    switch (c) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        if (c !== top)
          return false
        stack.pop()
    }

  }

  return !stack.length
  /** */
  //#endregion

  //#region solution 3
  let has = false
  while (
    s.indexOf('()') !== -1 ||
    s.indexOf('[]') !== -1 ||
    s.indexOf('{}') !== -1
  ) {

    s = s.replace('()', '')
    s = s.replace('[]', '')
    s = s.replace('{}', '')
  }
  return !s.length
  //#endregion
};
// @lc code=end

