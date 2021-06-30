function twoSum(numbers, target) {
  // write code here
  let arr = []

  numbers = numbers.map((item, index) => [item, index])
  numbers.sort((a, b) => a[0] - b[0])
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    let item
    if (numbers[i][0] + numbers[j][0] === target) {
      arr.push(numbers[i][1] + 1, numbers[j][1] + 1)
      break
    } else if (numbers[i][0] + numbers[j][0] < target) {
      i++
    } else {
      j--
    }
  }
  return arr[0] > arr[1] ? arr.reverse() : arr
}
