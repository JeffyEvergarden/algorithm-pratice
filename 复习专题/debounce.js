// 第一次延时
function debounce(fn, sec) {
  const context = this || window
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(context, args)
    }, sec * 1000)
  }
}

function debounce2(fn, sec) {
  const context = this || window
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    !timer && fn.apply(context, args)
    timer = setTimeout(() => {
      timer = null
    }, sec * 1000)
  }
}

function throttle(fn, sec) {
  const context = this || window
  let timer = null
  return function (...args) {
    if (timer) {
      return
    }
    !timer && fn.apply(context, args)
    timer = setTimeout(() => {
      timer = null
    }, sec * 1000)
  }
}
