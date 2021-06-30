const fs = require('fs')

const promisify = function (fn) {
  return function (...args) {
    return new Promise((reslove, reject) => {
      Array.prototype.push.call(args, function (err, ...data) {
        console.log(data instanceof Array) // true
        console.log(data instanceof Buffer) // false
        try {
          reslove(data)
        } catch (err) {
          reject(err)
        }
      })
      fn.apply(null, args)
    })
  }
}

const read = promisify(fs.readFile)

;(async function () {
  let res = await read('./new.js')
  console.log(res.toString())
})()
