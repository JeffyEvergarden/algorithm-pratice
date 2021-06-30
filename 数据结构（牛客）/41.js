// 给定一个数组arr，返回arr的最长无重复元素子数组的长度，无重复指的是所有数字都不相同。
// 子数组是连续的，比如[1,3,5,7,9]的子数组有[1,3]，[3,5,7]等等，但是[1,3,7]不是子数组

function maxLength(arr) {
  // write code here
  if (arr.length === 0) {
    return null
  }
  let i = 0
  let j = 0
  let max = [0, 0]
  let map = new Map()
  map.set(arr[0], 0)

  for (let k = 1; k < arr.length; k++) {
    if (map.has(arr[k])) {
      // 存在一样的key值
      i = Math.max(map.get(arr[k]) + 1, i)
      if (j - i >= max[1] - max[0]) {
        max = [i, j] // 作替换
      }
      j = k
      map.set(arr[k], k) // 添加当前key值
    } else {
      map.set(arr[k], k) // 将当前key值加入
      j++
      if (j - i >= max[1] - max[0]) {
        max = [i, j]
      }
    }
    console.log(max)
  }
  return max[1] - max[0] + 1
}

let a = maxLength([1, 2, 3, 1, 2, 3, 2, 2])
console.log(a)
