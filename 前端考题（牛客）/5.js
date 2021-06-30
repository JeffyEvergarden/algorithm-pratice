// 描述
// 为 Array 对象添加一个去除重复项的方法
// 示例1
// 输入：
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]

// 输出：
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']

Array.prototype.uniq = function () {
  let len = this.length,
    f = true
  for (let i = 0; i < len; i++) {
    if (this.indexOf(this[i]) !== i) {
      //存在前值
      if (f && isNaN(this[i])) {
        // -1 isNaN
        f = false
        continue
      }
      this.splice(i, 1)
      i--
      len--
    }
  }
  return this
}
