function _new(fn, ...args) {
  let obj = Object.create(fn.prototype)
  const o = fn.apply(obj, args)
  return o instanceof Object ? o : obj
}
