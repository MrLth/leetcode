/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-21 09:37:52
 * @LastEditTime: 2021-01-21 10:53:59
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.inputStack = []
  this.outputStack = []
};

/**
 * Push element x to the back of queue
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inputStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outputStack.length === 0) {
    while (this.inputStack.length > 1) {
      this.outputStack.push(this.inputStack.pop())
    }
    return this.inputStack.pop()
  }
  return this.outputStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.outputStack.length
    ? this.outputStack[this.outputStack.length - 1]
    : this.inputStack[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.outputStack.length && !this.inputStack.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end