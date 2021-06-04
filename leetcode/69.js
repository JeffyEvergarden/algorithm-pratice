// [69] x 的平方根

var mySqrt = function (x) {
  let head = 0
  let tail = x
  while (tail - head > 3) {
    let mid = (head + tail) >> 1
    if (mid === head) {
      break
    }
    let val = mid * mid
    if (val === x) {
      return mid
    } else if (val < x) {
      head = mid
    } else {
      tail = mid
    }
  }
  for (let i = tail; i >= head; i--) {
    if (i * i <= x) {
      return i
    }
  }
}
console.log(mySqrt(8))
