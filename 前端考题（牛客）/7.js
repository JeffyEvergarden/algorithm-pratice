// 按所给的时间格式输出指定的时间
// 格式说明
// 对于 2014.09.05 13:14:20
// yyyy: 年份，2014
// yy: 年份，14
// MM: 月份，补满两位，09
// M: 月份, 9
// dd: 日期，补满两位，05
// d: 日期, 5
// HH: 24制小时，补满两位，13
// H: 24制小时，13
// hh: 12制小时，补满两位，01
// h: 12制小时，1
// mm: 分钟，补满两位，14
// m: 分钟，14
// ss: 秒，补满两位，20
// s: 秒，20
// w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五

// 示例1
// 输入：
// formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
// 复制
// 输出：
// 2014-09-05 13:14:20 星期五

function formatDate(date, str) {
  const week = ['日', '一', '二', '三', '四', '五', '六']

  const timeReg = {
    'y+': date.getFullYear(), //年份
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'H+': date.getHours(), //小时
    'h+': date.getHours() % 12 || 12, //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    S: date.getMilliseconds(), //毫秒
    w: week[date.getDay() + ''], //周
  }

  for (let key in timeReg) {
    let reg = new RegExp('(' + key + ')')
    if (reg.test(str)) {
      let val = timeReg[key]
      if (key === 'y+') {
        str = str.replace(
          RegExp.$1,
          RegExp.$1.length === 2 ? (val + '').substr(2) : val
        )
      } else {
        str = str.replace(
          RegExp.$1,
          RegExp.$1.length === 2 ? (val < 10 ? '0' + val : val) : val
        )
      }
    }
  }
  return str
}

function test() {
  var localOffset = new Date().getTimezoneOffset() * 60 * 1000
  var sResult = formatDate(
    new Date(1409894060000 + localOffset),
    'yyyy-MM-dd HH:mm:ss 星期w'
  )
  console.log(sResult)
  return sResult === '2014-09-05 05:14:20 星期五'
}

test()
