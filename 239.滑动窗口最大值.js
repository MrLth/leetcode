/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-21 15:58:10
 * @LastEditTime: 2021-01-21 17:03:23
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
  const minHeap = new MaxHeap()

  let i = 0, len = nums.length
  const rst = []

  while (i < k) {
    minHeap.add(nums[i])
    // console.log(minHeap.top(), minHeap.heap)

    i++
  }

  rst.push(minHeap.top())

  while (i < len) {
    minHeap.replace(nums[i], minHeap.find(nums[i - k]))
    // console.log(minHeap.top(), minHeap.heap)
    rst.push(minHeap.top())

    i++
  }
  return rst
};


class MaxHeap {

  constructor() {
    this.heap = [null]
  }

  find(val) {

    const len = this.heap.length
    let i = 1
    while (i < len) {
      let l = i * 2, r = l + 1

      if (this.heap[i] === val) return i

      i = r >= len || this.heap[r] < val ? l : r

    }

    // return this.heap.indexOf(val)
  }

  add(val) {
    this.heap.push(val)
    this.up(this.heap.length - 1)
  }

  replace(val, i = 1) {
    this.heap[i] = val
    this.below(i)
    if (i === 1 || this.heap[i / 2 | 0] < this.heap[i]) {
      this.up(i)
    } else {
      this.below(i)
    }

  }

  up(i) {
    while (i > 1) {
      let j = i / 2 | 0
      if (this.heap[j] < this.heap[i]) {
        ;[this.heap[j], this.heap[i]] = [this.heap[i], this.heap[j]]
      }
      i = j
    }
  }

  below(i) {
    const len = this.heap.length
    const subLen = len / 2 | 0
    while (i <= subLen) {
      let l = i * 2, r = l + 1
      let min = r >= len || this.heap[l] > this.heap[r] ? l : r
      if (this.heap[min] > this.heap[i]) {
        ;[this.heap[min], this.heap[i]] = [this.heap[i], this.heap[min]]
      }
      i = min
    }
  }

  top() {
    return this.heap[1]
  }

}
// @lc code=end

console.log(maxSlidingWindow([-7,-8,7,5,7,1,6,0], 4))