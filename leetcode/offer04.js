// 剑指 Offer 04. 二维数组中的查找
// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

var findNumberIn2DArray = function (matrix, target) {
  let height = matrix.length // 1
  if (height === 0) {
    return false
  }
  let width = matrix[0].length // 2
  if (width === 0) {
    return false
  }
  height-- // 0
  width-- // 1
  let x = width // 1
  let y = 0
  while (0 <= x && y <= height) {
    console.log(x + ' ' + y)
    if (matrix[y][x] === target) {
      return true
    } else if (matrix[y][x] > target) {
      // 10 > 0
      x-- //
    } else {
      y++
    }
  }
  return false
}

findNumberIn2DArray([[1, 1]], 0)
