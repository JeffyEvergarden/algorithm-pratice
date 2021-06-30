function isObject(obj) {
  return typeof obj === 'object' && typeof obj !== 'null'
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

function cloneDeep(obj) {
  if (isArray(obj)) {
    let arr = []
    obj.forEach((element) => {
      arr.push(cloneDeep(element))
    })
    return arr
  } else if (isObject(obj)) {
    let newObj = {}
    for (let key in obj) {
      newObj[key] = cloneDeep(obj[key])
    }
    return newObj
  } else {
    // function
    return obj
  }
}
