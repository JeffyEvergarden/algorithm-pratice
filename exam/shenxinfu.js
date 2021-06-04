// Q2: 实现一个加权随机函数
//
// 函数 createWeightedSampling 接收一个整数数组 arr, 此数组元素个数
// N < 10000, 元素的值大于 0 且小于 100. 返回一个随机函数, 此随机
// 函数返回 [0, N - 1] 之间的一个随机整数. 每个整数 i 被返回的概率为
// 数组 arr 的第 i 个元素的值 / 数组 arr 的所有元素之和.
//
// 例: 给定一个数组 input, 值为 [4, 2, 1, 3],
// 调用 createWeightedSampling(input),
// 返回一个函数, 此函数返回一个 0 - 3 之间的一个随机整数, 相应的概率
// 分别为 4/10, 2/10, 1/10, 3/10.
//
// 在保证此随机函数的时间复杂度为 O(1) 的前提下, 尽可能优化其性能
// arr -> 整数
let assert = require('assert')

function createWeightedSampling(nums) {
  // show me the code
  let newNums = []
  function gen() {
    if (newNums.length === 0) {
      nums.forEach((item, index) => {
        let val = item
        if (isNaN(val)) {
          return
        }
        while (val--) {
          newNums.push(index)
        }
      })
    }
    for (let i = 0; i < newNums.length; i++) {
      let k = parseInt(newNums.length * Math.random())
      swap(newNums, i, k)
    }
  }

  return function () {
    if (newNums.length === 0) {
      gen()
    }
    return newNums.pop()
  }
}

function swap(arr, a, b) {
  if (b > arr.length - 1) {
    return
  }
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

// // 下面是测试代码

function testWeightedSamping() {
  const input = [4, 2, 1, 3]
  const sampling = createWeightedSampling(input)
  const count = [0, 0, 0, 0]
  for (let i = 0; i < 10000; i++) {
    count[sampling()]++ // 整数出现数 因为只出现 4/2/1/3
  }
  console.log(count)
  const rates = count.map((i) => Math.round(i / 1000))
  console.log(JSON.stringify(rates))
  console.assert(
    JSON.stringify(rates) === '[4,2,1,3]',
    'should same to snapshot'
  )
}

testWeightedSamping()
// 可以引⼊的库和版本相关请参考 “环境说明”
// 请你补全下⾯的代码，输出两数之和，使下⾯的代码能正确运⾏

function main() {
  const input = [4, 2, 1, 3]
  const sampling = createWeightedSampling(input)
  let arr = []
  while (arr.length <= 10) {
    arr.push(sampling())
  }
  console.log(arr)
}

// main()
