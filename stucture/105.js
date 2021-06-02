// 二分查找法

function search(nums, target) {
  let arr = nums
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    if (arr[start] === target) {
      return start
    }
    let index = Math.floor((start + end) / 2)
    if (arr[index] === target) {
      while (index >= 1 && arr[index - 1] == target) {
        index--
      }
      return index
    } else if (arr[index] > target) {
      end = index - 1
    } else {
      start = index + 1
    }
  }
  return -1
}
