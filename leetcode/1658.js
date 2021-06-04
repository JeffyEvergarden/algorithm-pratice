// 未解决

var minOperations = function (nums, x) {
  let sumL = []
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      sumL[i] = nums[i]
    } else {
      sumL[i] = nums[i] + sumL[i - 1]
    }
  }
  let sumR = []
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      sumL[i] = nums[i]
    } else {
      sumL[i] = nums[i] + sumL[i + 1]
    }
  }
}
