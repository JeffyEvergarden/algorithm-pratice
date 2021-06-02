// 数组扁平化

let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

function flat(arr) {
  let newarr = arr.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? flat(b) : b)
  }, [])
  return newarr
}

let a = flat([
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10,
])
console.log(a)
