// instanceof 实现

function instance_of(L, R) {
  L = L.__proto__
  let o = R.prototype
  while (true) {
    if (L === null) {
      return false
    }
    if (L === o) {
      return true
    }
    L = L.__proto__
  }
}
