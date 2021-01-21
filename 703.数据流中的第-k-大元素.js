/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-21 13:28:18
 * @LastEditTime: 2021-01-21 15:29:02
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.minHeap = [null]
  this.count = k
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i])
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {


  if (this.minHeap.length < this.count + 1) {
    let i = this.minHeap.length
    this.minHeap.push(val)
    while (i > 1) {
      let j = i / 2 | 0
      if (this.minHeap[j] > this.minHeap[i]) {
        ;[this.minHeap[j], this.minHeap[i]] = [this.minHeap[i], this.minHeap[j]]
      }
      i = j
    }

  } else if (val > this.minHeap[1]) {
    const len = this.minHeap.length
    const subLen = len / 2 | 0
    this.minHeap[1] = val
    let i = 1
    while (i <= subLen) {
      let l = i * 2, r = l + 1
      let min = r >= len || this.minHeap[l] < this.minHeap[r] ? l : r
      if (this.minHeap[min] < this.minHeap[i]) {
        ;[this.minHeap[min], this.minHeap[i]] = [this.minHeap[i], this.minHeap[min]]
      }
      i = min
    }

  }

  // console.log(this.minHeap[1], this)
  return this.minHeap[1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

// let obj = new KthLargest(2, [0])
// obj.add(-1)
// obj.add(1)
// obj.add(-2)
// obj.add(-4)
// obj.add(3)