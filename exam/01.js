// [-2, 1, 3, 5, -1] => [-2, -1, 1, 3, 5]

function sort(nums) {
  let start = -1
  let end = -1
  let i = 0
  let length = nums.length
  while (start < length && end < length) {
    // 找到第一个正数
    while (arr[start + 1] < 0 && start <= length - 2) {
      start++
    }
    start++
    // 找到start 之后的负数
    if (end > -1) {
      end = start + 1
    }
    // 找到负数
    while (arr[end] >= 0) {
      end++
    }
    if (end) {
    }
  }
}

function find() {}
