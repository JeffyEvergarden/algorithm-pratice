function MySort(arr) {
  // write code here
  let length = arr.length - 1
  quickSort(arr, 0, length)
  return arr
}

function quickSort(arr, l, r) {
  if (l > r) {
    return
  }
  while (l < r) {
    let base = arr[l]
    let x = l,
      y = r
    while (x < y) {
      while (x < y && arr[y] > base) y--
      if (x < y) {
        arr[x++] = arr[y]
      }
      while (x < y && arr[x] < base) x++
      if (x < y) {
        arr[y--] = arr[x]
      }
    }
    arr[x] = base
    quickSort(arr, x + 1, r)
    r = x - 1
  }
}

let arr = [8, 2, 1, 8, 3, 8, 4, 8, 10]
MySort(arr)
console.log(arr)
