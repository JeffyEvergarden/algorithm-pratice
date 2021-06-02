// 封装函数 f，使 f 的 this 指向指定的对象
// function bindThis(f, oTarget) {

// }



function bindThis(f, oTarget) {
  let arg = Array.from(arguments).slice(2)
  console.log(arg)
  return function(...args) {
      let arr = arg.concat(args)
      console.log(arr)
      return f.apply(oTarget, arr)
  }
}


// 使得下述函数成立

const fs = function () {
  var r = bindThis(
    function (a, b) {
      return this.test + a + b
    },
    { test: 2 }
  )(2, 3)
  console.log(r)
  return r === 7
}

fs()