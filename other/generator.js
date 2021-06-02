function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, time)
  })
}

let test = (function () {
  // ret 为一个Promise对象，因为ES6语法规定 async 函数的返回值必须是一个 promise 对象
  let ret = _asyncToGenerator(function* () {
    for (let i = 0; i < 10; i++) {
      let result = yield sleep(2000)
      console.log('i:', i, '  ', result)
    }
  })
  return ret
})()

// generator 自执行器
function _asyncToGenerator(genFn) {
  return new Promise((resolve, reject) => {
    let gen = genFn()
    function step(key, arg) {
      let info = {}
      try {
        info = gen[key](arg)
        console.log(info)
      } catch (error) {
        reject(error)
        return
      }
      if (info.done) {
        resolve(info.value)
      } else {
        console.log('info.value', info.value)
        return Promise.resolve(info.value).then(
          (v) => {
            console.log('v:', v)
            return step('next', v)
          },
          (error) => {
            return step('throw', error)
          }
        )
      }
    }
    step('next')
  })
}
