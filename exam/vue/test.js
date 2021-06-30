let obj = { a: 10 }

let value = obj.a

const definedObj = {
  enumerable: true,
  configurable: true,
  get() {
    console.log('this')
    console.log(this)
    return value
  },
  set(val) {
    value = val
  },
}

Object.defineProperty(obj, 'a', definedObj)

console.log(obj.a)
obj.a = 12

definedObj.get = ()=> {
  return 100
}

console.log(obj.a)
