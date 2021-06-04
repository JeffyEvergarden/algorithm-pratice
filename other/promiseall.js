// Promise.all([p1, p2, p3]).then(res => {
//   console.log(res) => [p1, p2, p3]结果
// })

// Promise.all([() => {
//   return p1
// }, () => {
//   return p2
// }]).then(res => {
// console.log(res)  => [p1, p2, p3]结果
// })

Promise.all = function (arr) {
  let list = []
  let len = 0

  return new Promise((reslove, reject) => {
    function dispatch(i, content) {
      if (len === arr.length) {
        resolve(list)
      }
      const fn = arr[i]
      return fn.then((data) => {
        len++
        list[i] = data
        dispatch(i + 1)
      })
    }
    dispatch(0)
  })
}
