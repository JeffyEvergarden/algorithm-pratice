let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

let matrix2 = [[2, 3]]
let matrix3 = [[7], [9], [6]]
let matrix4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]
function spiralOrder(matrix) {
  let list = []
  if (matrix.length === 0) {
    return []
  }
  // write code here
  let minWidth = 0
  let minHeight = 0
  let maxWidth = matrix[0].length - 1
  let maxHeight = matrix.length - 1

  while (minWidth <= maxWidth && minHeight <= maxHeight) {
    leftToRight(minHeight, minWidth, maxWidth)
    minHeight++
    if (minHeight > maxHeight) {
      break
    }
    topToBottom(maxWidth, minHeight, maxHeight)
    maxWidth--
    if (minWidth > maxWidth) {
      break
    }
    rightToLeft(maxHeight, minWidth, maxWidth)
    maxHeight--
    bottomToTop(minWidth, minHeight, maxHeight)
    minWidth++
  }

  return list

  function leftToRight(row, k, j) {
    if (k > j) {
      return
    }
    let arr = matrix[row]
    for (let i = k; i <= j; i++) {
      list.push(arr[i])
    }
  }

  function topToBottom(column, k, j) {
    if (k > j) {
      return
    }
    for (let i = k; i <= j; i++) {
      list.push(matrix[i][column])
    }
  }

  function rightToLeft(row, k, j) {
    if (k > j) {
      return
    }
    let arr = matrix[row]
    for (let i = j; i >= k; i--) {
      list.push(arr[i])
    }
  }

  function bottomToTop(column, k, j) {
    if (k > j) {
      return
    }
    for (let i = j; i >= k; i--) {
      list.push(matrix[i][column])
    }
  }
}

console.log(spiralOrder(matrix))
console.log(spiralOrder(matrix2))
console.log(spiralOrder(matrix3))
console.log(spiralOrder(matrix4))
