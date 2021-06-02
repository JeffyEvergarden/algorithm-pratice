// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组
// 4. 不支持URLSearchParams方法

function getUrlParam(sUrl, sKey) {
  let reg = /[&?][^&?]+=[^&?#]+/g

  let arr = sUrl.match(reg)
  console.log(arr)
  let obj = {}
  arr.forEach((str) => {
    let item = str.split('=')
    let name = item[0].slice(1)
    let val = item[1]
    if (obj.hasOwnProperty(name)) {
      if (!Array.isArray(obj[name])) {
        obj[name] = [obj[name]]
      }
      obj[name].push(val)
    } else {
      obj[name] = val
    }
  })
  return sKey ? obj[sKey] || '' : obj
}

console.log(
  getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key')
)
