function debounce(fn, second) {
  let timer = null
  let content = this
  let flag = true

  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }

    !timer && fn.apply(content, args)

    timer = setTimeout(() => {
      timer = null
    }, second)
  }
}

function throttle(fn, second) {
  let timer = null
  let content = this

  return (...args) => {
    if (timer) {
      return
    }

    timer = setTimeout(() => {
      timer = null
      fn.apply(content, args)
    }, second)
  }
}
