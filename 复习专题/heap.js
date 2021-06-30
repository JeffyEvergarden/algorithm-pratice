class Heap {
  constructor(max) {
    this.arr = []
    this.maxLength = max
  }
  push(val) {
    this.arr.push(val)
    this.adjust()
  }
  // 向上调整
  adjustUp() {
    let arr = this.arr
    let maxLength = arr.length - 1
    let index = arr.length - 1
    while (index > 0) {
      let parent = parseInt((index - 1) / 2)
      if (arr[parent] >= arr[index]) {
        break
      } else {
        this.swap(parent, index)
        index = parent
      }
    }
  }

  swap(a, b) {
    let temp = this.arr[a]
    this.arr[a] = this.arr[b]
    this.arr[b] = temp
  }

  pop() {
    if (this.arr.length === 0) {
      return null
    }
    this.swap(0, this.arr.length - 1)
    // 向下调整
    return this.arr.pop()
  }

  adjustDown() {
    let arr = this.arr
    let maxLength = arr.length - 1
    let mid = parseInt(maxLength / 2)
    let index = 0
    while (index * 2 + 1 <= maxLength) {
      let tmp = index
      if (arr[index] < arr[index * 2 + 1]) {
        tmp = index * 2 + 1
      }
      if (index * 2 + 2 < maxLength && arr[tmp] < arr[index * 2 + 2]) {
        tmp = index * 2 + 2
      }
      if (tmp === index) {
        break
      }
      this.swap(tmp, index)
      index = tmp
    }
  }

  top() {
    return this.arr[0]
  }
  size() {
    return this.arr.length
  }
}
