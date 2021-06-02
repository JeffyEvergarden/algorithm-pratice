const PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED'

class BasePromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.value = value
      this.status = FULFILLED
      this.onResolvedCallbacks.forEach((fn) => {
        fn(this.value)
      })
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.reason = reason
      this.status = REJECTED
      this.onRejectedCallbacks.forEach((fn) => {
        fn(this.reason)
      })
    }
  }

  // 这里只能处理包含一个then方法,并接收两个参数onFulfilled, onRejected
  then(onFulfilled, onRejected) {
    // 成功提交
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    } else if (this.status === REJECTED) {
      // 失败提交
      onRejected(this.reason)
    } else if (this.status === PENDING) {
      // 如果promise的状态是PENDING，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次执行对应的函数
      this.onResolvedCallbacks.push(() => {
        this.value = onFulfilled(this.value)
      })
      this.onRejectedCallbacks.push(() => {
        this.reason = onRejected(this.reason)
      })
    }
  }

  catch() {}
}

class SuperPromise extends BasePromise {
  constructor(executor) {
    super(executor)
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (v) => {
            throw v
          }
    let origin = new FullPromise((resolve, reject) => {
      if (this.status === 'FULFILLED') {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        }, 0)
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        }, 0)
      } else if (this.status === PENDING) {
        // 加入 回调方法
        this.onResolvedCallbacks.push((value) => {
          try {
            let result = onFulfilled(value)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
        this.onRejectedCallbacks.push((value) => {
          try {
            let result = onRejected(value)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
      }
    })

    return origin
  }
}

class Person {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(this.name)
  }
}

class Children {
  constructor() {
    super('children')
  }
}
