// 描述
// 根据包名，在指定空间中创建对象
// 输入描述：
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出描述：
// {a: {test: 1, b: {c: {d: {}}}}}

function namespace(oNamespace, sPackage) {
  let obj = oNamespace
  let arr = sPackage.split('.')
  console.log(arr)
  let i = 0
  while (i < arr.length) {
    let key = arr[i]
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      obj = obj[key]
    } else {
      if (i === arr.length - 1 && obj.hasOwnProperty(key)) {
        break
      }
      obj[key] = {}
      obj = obj[key]
    }
    i++
  }

  return oNamespace
}

function test() {
  var a = {}
  var r = namespace(a, 'a.b.c.d.e.f.g')
  console.log(JSON.stringify(r, null, 2))
  a.a.b.c.d.e.f.g = 1
  return a.a.b.c.d.e.f.g === 1
}

console.log(test())
