/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-01-22 10:38:19
 * @LastEditTime: 2021-01-22 11:10:57
 * @Description: file content
 */
var maxSlidingWindow = function(nums, k) {
  const ans = [];
  const length =nums.length;
  const queue = [];
  for(let i=0;i<length;i++){
      while(queue.length && queue[queue.length-1][0]<=nums[i]){
          queue.pop();
      }
      queue.push([nums[i],i]);
      if(queue[0][1]<=i-k){
          queue.shift();
      }
      if(i>=k-1){
          ans.push(queue[0][0]);
      }
  }
  return ans;
};

var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0 || k === 0) {
    return [];
  }
  let queue = [];
  let res = [];
  for (let right = 0, left = 1 - k; right < nums.length; left++, right++) {
    if (left > 0 && queue[0] === nums[left - 1]) {
      queue.shift();
    }
    while (queue.length !== 0 && queue[queue.length - 1] < nums[right]) {
      queue.pop();
    }
    queue.push(nums[right]);
    if (left >= 0) {
      res[left] = queue[0];
    }
  }
  return res;
};