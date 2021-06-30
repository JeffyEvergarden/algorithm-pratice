// ‘dd123cc234’ -> ‘dd124cc235’

function replace(str) {
  let reg = /([a-zA-Z]+)(\d+)([a-zA-Z]+)(\d+)/
  if (reg.test(str)) {
    str = str.replace(RegExp.$2, Number(RegExp.$2) + 1)
    str = str.replace(RegExp.$4, Number(RegExp.$4) + 1)
  }
  return str
}

replace('dd123cc234')

'dd123cc234'.replace(/[a-zA-Z]+([0-9]+)/g, function (str) {
  console.log(str)
  return str.match(/[a-zA-Z]+/g) + (Number(str.match(/([0-9]+)/g)) + 1)
})
