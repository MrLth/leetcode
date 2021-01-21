/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-21 11:14:30
 * @LastEditTime: 2021-01-21 12:41:38
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = []
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  const tmpQueue = []
  while (this.queue.length > 1) {
    tmpQueue.push(this.queue.shift())
  }

  const temp = this.queue.shift()
  this.queue = tmpQueue

  return temp
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  const tmpQueue = []
  while (this.queue.length > 1) {
    tmpQueue.push(this.queue.shift())
  }

  const temp = this.queue.shift()

  this.queue = tmpQueue
  this.queue.push(temp)

  return temp
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
