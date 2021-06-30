// 合并区间
// 给出一组区间，请合并所有重叠的区间。
// 请保证合并后的区间按区间起点升序排列。
// 示例1

// 输入：
// [[10,30],[20,60],[80,100],[150,180]]
// 复制
// 返回值：
// [[10,60],[80,100],[150,180]]

function merge(intervals) {
  // write code here
  let arr = intervals.sort((a, b) => a[0] - b[0])
  console.log(arr)
  let i = 1
  let start = arr[0][0]
  let end = arr[0][1]
  while (i < arr.length) {
    let currentArr = arr[i]
    if (currentArr[1] <= end) {
      arr.splice(i, 1)
    } else if (currentArr[0] > end) {
      start = currentArr[0]
      end = currentArr[1]
      i++
    } else if (currentArr[0] <= end) {
      end = Math.max(currentArr[1], end)
      arr.splice(i - 1, 2, [start, end])
    }
  }
  console.log(arr)
  return arr
}

merge([
  [10, 30],
  [20, 60],
  [80, 100],
  [150, 180],
])
