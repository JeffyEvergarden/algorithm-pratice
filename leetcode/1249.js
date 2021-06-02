// 移除无效括号


var minRemoveToMakeValid = function (s) {
  let str = ''
  for (let i = 0, cnt = 0; i < s.length; i++) {
    if (s[i] === '(') {
      cnt += 1
      str = str + s[i]
    } else if (s[i] === ')') {
      cnt -= 1
      if (cnt < 0) {
        cnt++
        continue
      }
      str = str + s[i]
    } else {
      str = str + s[i]
    }
  }
  console.log(str)
  let newStr = ''
  for (let i = str.length - 1, cnt = 0; i > -1; i--) {
    if (str[i] === ')') {
      cnt += 1
      newStr = str[i] + newStr
    } else if (str[i] === '(') {
      cnt -= 1
      if (cnt < 0) {
        cnt++
        continue
      }
      newStr = str[i] + newStr
    } else {
      newStr = str[i] + newStr
    }
  }
  console.log(newStr)
  return newStr
}
