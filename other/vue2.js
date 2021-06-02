class Dep {
  constructor() {
    this.deps = []
  }

  addDep(dep) {
    this.deps.push(dep)
  }

  notify() {
    this.deps.forEach((dep) => dep())
  }
}

function defineReactive(obj, key, val) {
  // 递归
  // observe(val)

  // Dep在这创建
  const dep = new Dep()

  Object.defineProperty(obj, key, {
    get() {
      console.log('get', key)
      // 依赖收集
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(v) {
      if (val !== v) {
        console.log('set', key)
        // 传入新值v可能还是对象
        // observe(v)
        val = v

        dep.notify()
      }
    },
  })
}

let o = { a: 1, b: 2 }

defineReactive(o, 'a', o.a)
defineReactive(o, 'b', o.b)

function autoRun(fn) {
  Dep.target = fn
  fn()
  Dep.target = null
}

autoRun(() => {
  console.log('watch')
  console.log(o.a)
})

setTimeout(() => {
  o.a = 20
}, 2000)
