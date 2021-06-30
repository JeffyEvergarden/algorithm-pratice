// 未解决  在排序数组中查找元素的第一个和最后一个位置

var searchRange = function (nums, target) {
  let head = 0
  let tail = nums.length - 1

  let mid = (head + tail) >> 1
  }
  return [-1, -1]
}

function search(nums, target){
  let head = 0
  let tail = nums.length - 1

  }
  while (head <= tail) {
    let mid = (head + tail) >> 1
    if (nums[mid] === target) {
        // 中心扩散
        let start = mid
        let end = mid
    } else if (nums[mid] < target) {
        head = mid + 1
    } else {
        tail = mid - 1
    }
}
