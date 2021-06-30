var obj = {
  name: 'huihui',
  age: 10,
  inner: {
    a: 12
  },
  getName() {
    console.log(this.name)
  },
}

let str = JSON.stringify(obj, (key, val) => {
  console.log(key, val)
  return val
})

console.log(str)
console.log('---------')
let obj2 = JSON.parse(str)
console.log(obj2)
