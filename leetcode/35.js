/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let arr = nums
  let head = 0
  let tail = nums.length - 1
  while (head <= tail) {
    let mid = (head + tail) >> 1

    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      head = mid + 1
    } else {
      tail = mid - 1
    }
  }
  return head
}
