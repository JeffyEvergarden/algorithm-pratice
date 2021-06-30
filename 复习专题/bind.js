Function.prototype._call = function (obj, ...res) {
  let fn = this
  obj._fn = fn
  let result = obj._fn(...res)
  delete obj._fn
  return
}

Function.prototype._apply = function (obj, res) {
  let fn = this
  obj._fn = fn
  let result = obj._fn(...res)
  delete obj._fn
  return
}

let obj = {
  name: 'huihui',
  age: 10,
}

function getName(desc) {
  console.log(this.name + desc)
}

getName._call(obj, '123')

getName._apply(obj, ['321'])

Function.prototype._bind = function (obj, ...args) {
  let fn = this
  return function (...arr) {
    return fn._apply(obj, args.concat(arr))
  }
}

let fn = getName._bind(obj, '456')

fn()
