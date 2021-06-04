const fake = new Promise((reslove, reject) => {
  reslove('fake')
  console.log('---------')
  reject('fuck')
  console.log('---------')
})

let a = '1312414'

let b = a.substr(0, a.length - 1)
let c = a.substring(0, a.length - 1)
console.log(b)
console.log(c)
