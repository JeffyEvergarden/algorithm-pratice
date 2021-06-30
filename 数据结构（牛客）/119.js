// 最小的K个数
// 描述
// 给定一个数组，找出其中最小的K个数。例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。如果K>数组的长度，那么返回一个空的数组
// 示例1
// 输入：
// [4,5,1,6,2,7,3,8],4
// 返回值：
// [1,2,3,4]

function GetLeastNumbers_Solution(input, k) {
  // write code here
  if (k === 0 || input.length === 0 || input.length < k) {
    return []
  }

  let heap = new Heap(k)

  let i = 0
  while (i < input.length) {
    heap.push(input[i])
    i++
  }
  return heap.arr
}

class Heap {
  constructor(max) {
    this.max = max
    this.arr = []
  }
  push(val) {
    let arr = this.arr
    let i = 0
    while (i < arr.length) {
      if (arr[i] < val) {
        i++
      } else {
        break
      }
    }
    for (let j = arr.length - 1; j >= i; j--) {
      arr[j + 1] = arr[j]
    }
    arr[i] = val

    if (arr.length > this.max) {
      arr.length = this.max
    }
  }
}

console.log(GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4))
