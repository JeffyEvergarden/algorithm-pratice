module.exports = function (fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      args.push(function (err, ...arg) {
        if (err) {
          reject(err)
        } else {
          reslove(...arg)
        }
      })
      fn.apply(null, args)
    })
  }
}
